class SetlistSongsAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/setlist_songs'
    }
    //CREATE
    createSetlistSong(e){
        //setlist id//song id and connecting them
        const setlistId = e.currentTarget.id.split("-")[1]
        const songId = e.currentTarget.lastElementChild.id.split("-")[1]

        let newJoinObj = {
            setlist_id: setlistId,
            song_id: songId
        }

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newJoinObj)
        }

        fetch('http://localhost:3000/setlist_songs', configObj)
        .then(resp => resp.json())
        .then(json => {
            let songId = json.data.attributes.song.id
            let song = document.querySelector(`#song-${songId}`)
            let setlistId = json.data.attributes.setlist.id
            let setlist = document.querySelector(`#setlist-${setlistId}`)
            song.id = `song-${json.data.attributes.song.id}-${json.data.attributes.id}`
            setlist.id = `setlist-${json.data.attributes.setlist.id}-${json.data.attributes.id}`
        })      
    }

    //DELETE
    deleteSetlistSong(e){
        let setlistSongIdNum = parseInt(e.currentTarget.lastElementChild.id.split("-")[2])

        let setlistSongId = {
            id: setlistSongIdNum
        }
        
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }, 
            body: JSON.stringify(setlistSongId)
        }

        fetch(`http://localhost:3000/setlist_songs/${setlistSongIdNum}`, configObj)
        .then(resp => resp.json())
        .then(json => {
            let songId = json.data.attributes.song.id
            let song = document.querySelector(`#song-${songId}-${json.data.attributes.id}`)
            let setlistId = json.data.attributes.setlist.id
            let setlist = document.querySelector(`#setlist-${setlistId}-${json.data.attributes.id}`)
            song.id = `song-${songId}`
            setlist.id = `setlist-${setlistId}`
            alert('Relationship removed')
        })
    }
}