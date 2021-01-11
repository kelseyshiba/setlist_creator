class SongsAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/songs'
    }
    
    //GET
    fetchSongs(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => {
            json.data.sort(function (a, b) { if(a.attributes.title > b.attributes.title) {return 1} else if (a.attributes.title < b.attributes.title) { return -1 } return 0; }).forEach(song => new Song(song.attributes).renderSong(song.attributes))
        })
    }
//attributes: {title: "At Last", artist: "Etta James", key: "F"}
    
    //CREATE
    createSong(e){
        e.preventDefault();
        addSongButton.style.display = 'block';
        let formHide = document.querySelector('#add-form')
        formHide.style.display = 'none';
        let songTarget = e.target.parentNode.children 
        //attributes: {artist, key, title}}
    
        let newSong = {
            title: songTarget[1].value,
            artist: songTarget[4].value,
            key: songTarget[7].value
        }
    
        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newSong)
        }
    
        fetch('http://localhost:3000/songs', configObj)
        .then(resp => resp.json())
        .then(json => new Song(json.data.attributes).renderSong(json.data.attributes));
        
    }
    //UPDATE
    patchSong(e){
        e.preventDefault()
        const id = parseInt(e.currentTarget.id.split("-")[2])
        let attributes = e.currentTarget.parentElement.children
        const title = attributes[1].value
        const artist = attributes[4].value
        const key = attributes[7].value

        let songObj = {
            id,
            title,
            artist,
            key
        }

        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(songObj)
        }

        fetch(`http://localhost:3000/songs/${id}`, configObj)
        .then(resp => resp.json())
        .then(json => {
            let song = Song.all.find(song => song.id == json.data.attributes.id)
            song.updateOnDom(json.data.attributes)
        })

        let form = document.querySelector(`#update-form-${id}`);
        form.remove();
    }

    //DELETE
    deleteSong(e){
        let deleteId = { id: e.target.id.split("-")[2] }
        let delSongDiv = document.querySelector(`div#song-${e.target.id.split("-")[2]}`)
        delSongDiv.remove();
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(deleteId)
        }
    
        fetch(`http://localhost:3000/songs/${parseInt(deleteId.id)}`, configObj)
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}