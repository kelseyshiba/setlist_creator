class SongsAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/songs'
    }
    //GET
    fetchSongs(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => json.data.forEach(song => new Song(song.attributes).renderSong(song.attributes))); 
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
        .then(json => new Song(json.data.attributes).renderSong(json.data.attributes))//new Song(json.data.attributres).renderSong(json.data.attributes));
        
    }
    //UPDATE
    
    //DELETE
    deleteSong(e){
        let deleteId = { id: e.target.id.split("-")[2] }
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
        .then(json => document.querySelector(`#song-${deleteId.id}`).remove())
    }
}