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
        .then(json => console.log(json))//need to do here?
    }

    //DELETE
    deleteSetlistSong(e){
        const songId = e.currentTarget.lastElementChild.id.split("-");
    }
}