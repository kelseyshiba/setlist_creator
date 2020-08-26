class Setlist {
    static all = [];

    constructor({name, date, id}){
        this.name = name
        this.date = date
        this.id = id

        Setlist.all.push(this)
    }

    static findById(Id){
        return Setlist.all.find(setlist => setlist.id == Id)
    }
  
    renderSetlist(setlist){
        const allSetlistsDiv = document.querySelector('#all-setlists')
        const setlistDiv = document.createElement('div')
        setlistDiv.id = `setlist-${setlist.id}`
        setlistDiv.className = `border border-secondary rounded`
        setlistDiv.innerHTML = `<h4 text-center>${setlist.name} <button id='edit-setlist-${setlist.id}' class='btn btn-warning'><i class="far fa-edit"></i></button><button id='delete-setlist-${setlist.id}' class='btn btn-danger'><i class="far fa-trash-alt"></i></span></button></h4><p>${setlist.date.split("T")[0]}</p>`

        allSetlistsDiv.appendChild(setlistDiv)
    }
}