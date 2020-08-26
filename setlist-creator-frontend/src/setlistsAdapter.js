class SetlistsAdapter {
    constructor(){
        this.baseUrl = `http://localhost:3000/setlists`
    }

    //GET
    fetchSetlists(){
    fetch(this.baseUrl)
    .then(resp => resp.json())
    .then(json => json.data.forEach(setlist => new Setlist(setlist.attributes).renderSetlist(setlist.attributes)));
    }
}