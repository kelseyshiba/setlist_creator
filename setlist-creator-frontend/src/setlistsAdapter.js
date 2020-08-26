class SetlistsAdapter {
    constructor(){
        this.baseUrl = `http://localhost:3000/setlists`
    }

    //GET
    fetchSetlists(){
    fetch(this.baseUrl)
    .then(resp => resp.json())
    .then(json => {
        Setlist.titleAdds();
        json.data.forEach(setlist => new Setlist(setlist.attributes).renderSetlist(setlist.attributes))
        })
    }
    //CREATE
    createSetlist(e){
        e.preventDefault()

    }
    //DELETE
    // deleteSetlist(id){
       
    //     let delSetlistDiv = document.querySelector(`#setlist-${parseInt(id)}`)
    //     delSetlistDiv.remove();
    //     let configObj = {
    //         method: 'DELETE',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         }
    //     }

    //     fetch(`http://localhost:3000/setlists/${id}`, configObj)
    //     .then(resp => resp.json())
    //     .then(json => alert(json.message))
    // }
}