class SetlistsAdapter {
    constructor(){
        this.baseUrl = `http://localhost:3000/setlists`
    }

    //GET
    fetchSetlists(){
    fetch(this.baseUrl)
    .then(resp => resp.json())
    .then(json => {
        json.data.forEach(setlist => new Setlist(setlist.attributes).renderSetlist(setlist.attributes))
        })
        Setlist.titleAdds();
    }
    //CREATE
    createSetlist(e){
        e.preventDefault()
        let setlistObj = {
            date: e.target.parentElement.children[3].value,
            name: e.target.parentElement.children[5].value
        }

        let configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(setlistObj)
        }

        fetch(`http://localhost:3000/setlists`, configObj)
        .then(resp => resp.json())
        .then(json => new Setlist(json.data.attributes).renderSetlist(json.data.attributes))

        let newForm = document.querySelector('#new-setlist-form')
        newForm.hidden = true
        const addSetlistButton = document.querySelector('#add-setlist')
        addSetlistButton.style.display = "block";
    }

    //UPDATE
    updateSetlist(e){
        e.preventDefault()
        
        let setlist = Setlist.findById(e.target.id.split("-")[2])
        let date = e.target.parentNode.children[3].value
        let name = e.target.parentNode.children[5].value
        let id = setlist.id

        let setlistObj = {
            date, 
            name, 
            id
        }

        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(setlistObj)
        }

        fetch(`http://localhost:3000/setlists/${id}`, configObj)
        .then(resp => resp.json())
        .then(json => {
            const setlist = Setlist.all.find(setlist => setlist.id == json.data.attributes.id)
            setlist.updateOnDom(json.data.attributes)
        })
        
    }
    //DELETE
    deleteSetlist(e){
        let setlistId = e.currentTarget.id.split("-")[2]
        let delSetlistDiv = document.querySelector(`#setlist-${parseInt(setlistId)}`)
        delSetlistDiv.remove();

        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }

        fetch(`http://localhost:3000/setlists/${setlistId}`, configObj)
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}