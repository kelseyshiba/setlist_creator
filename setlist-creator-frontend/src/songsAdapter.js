class SongsAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/songs'
    }

    fetchSongs(){
        fetch(this.baseUrl)
        .then(res => res.json())
        .then(json => json.data.forEach(song => new Song)); 
    }
//{id: "1", type: "song", attributes: {…}}
//attributes: {title: "At Last", artist: "Etta James", key: "F"}
    
}