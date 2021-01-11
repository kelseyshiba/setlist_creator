class SetlistSongsAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/setlist_songs'
    }
    //CREATE
    createSetlistSong(e){
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
             let songId = json.data.attributes.song_id
             let song = document.querySelector(`#song-${songId}`)
             song.id = `setlist-song-${json.data.id}`
         })
    }

    //DELETE
    deleteSetlistSong(e){
        let setlistSongIdNum = e.currentTarget.lastElementChild.id.split("-")[2]

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
             let songId = json.data.attributes.song_id
             let song = document.querySelector(`#setlist-song-${json.data.id}`)
             song.id = `song-${songId}`
             alert('Song removed')
        })
    }
}