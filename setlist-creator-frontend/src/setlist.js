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

    static titleAdds(){
        const allSetlists = document.querySelector('#all-setlists')
        allSetlists.innerHTML = `<section class='title-section'><h3 lead text-center>Set Lists <button id='add-setlist' class='btn btn-success'>+</button></h3><section>`
    }
  
    renderSetlist(setlist){
        const allSetlistsDiv = document.querySelector('#all-setlists')
        const setlistDiv = document.createElement('div')
        setlistDiv.id = `setlist-${setlist.id}`
        setlistDiv.className = `border border-secondary rounded`
        setlistDiv.innerHTML = `<div id='inner-setlist-div-${setlist.id}'><h4 class='text-center'>${setlist.name} <button id='edit-setlist-${setlist.id}' class='btn btn-warning'><i class="far fa-edit"></i></button><button id='delete-setlist-${setlist.id}' class='btn btn-danger'><i class="far fa-trash-alt"></i></span></button></h4><p>${setlist.date}</p></div>`

        allSetlistsDiv.appendChild(setlistDiv)

        const updateButton = document.querySelector(`#edit-setlist-${setlist.id}`)
        updateButton.addEventListener('click', this.updateSetlistForm)
        const delButton = document.querySelector(`#delete-setlist-${setlist.id}`)
        delButton.addEventListener('click', setlistsAdapter.deleteSetlist) 
        
        this.addListeners(); 
    }

    addListeners(){
        const addSetlistButton = document.querySelector('#add-setlist');
        addSetlistButton.addEventListener('click', this.setlistForm)
    }

    setlistForm(e){
        e.target.style.display = 'none';
        let titleDiv = document.querySelector('.title-section')
        let newForm = document.createElement('div')
        newForm.id = `new-setlist-form`
        newForm.innerHTML =
        `<form class='form-group'>
        <h3 class='text-center'>Add a New Setlist</h3><br>
        
        <label class='control-label' for='date'>Date: (format YYYY-MM-DD)</label>
        <input class='form-control' type='text' name='setlist[date]'>
        <label class='control-label' for='name'>Name:</label>
        <input class='form-control' type='text' name='setlist[name]'>
        <input class='btn btn-success' type='submit' id='submit-setlist'></form>`
        titleDiv.append(newForm)

        let submitButton = document.querySelector('#submit-setlist')
        submitButton.addEventListener('click', setlistsAdapter.createSetlist)
    }

    updateSetlistForm(e){
        let setlist = Setlist.findById(e.currentTarget.id.split("-")[2])
        let updateForm = document.createElement('div')
        updateForm.id = `update-form-${setlist.id}`
        updateForm.innerHTML = 
        `<form class='form-group'>
        <h3 class='text-center'>Edit Setlist</h3><br>
        
        <label class='control-label' for='date'>Date: (format YYYY-MM-DD)</label>
        <input class='form-control' type='text' name='setlist[date]' value='${setlist.date}'>
        <label class='control-label' for='name'>Name:</label>
        <input class='form-control' type='text' name='setlist[name]' value='${setlist.name}'>
        <input class='btn btn-success' type='submit' id='update-setlist-${setlist.id}'></form>`

        let innerDiv = document.querySelector(`#inner-setlist-div-${setlist.id}`)
        innerDiv.style.display = 'none';
        let setlistDiv = document.querySelector(`#setlist-${setlist.id}`)
        setlistDiv.appendChild(updateForm)

        const updateButton = document.querySelector(`#update-setlist-${setlist.id}`)
        updateButton.addEventListener('click', setlistsAdapter.updateSetlist)
    }
//attributes: date: "2020-08-25T05:16:40.558Z" id: 1 name: "Set 1"
    updateOnDom(setlist){
        let updateForm = document.querySelector(`#update-form-${setlist.id}`)
        updateForm.remove()
        
        this.name = setlist.name
        this.date = setlist.date
        let innerDiv = document.querySelector(`#inner-setlist-div-${setlist.id}`)
        innerDiv.style.display = 'block';
        innerDiv.innerHTML = `<div id='inner-setlist-div-${setlist.id}'><h4 class='text-center'>${setlist.name} <button id='edit-setlist-${setlist.id}' class='btn btn-warning'><i class="far fa-edit"></i></button><button id='delete-setlist-${setlist.id}' class='btn btn-danger'><i class="far fa-trash-alt"></i></span></button></h4><p>${setlist.date}</p></div>`
        
        const updateButton = document.querySelector(`#edit-setlist-${setlist.id}`)
        updateButton.addEventListener('click', this.updateSetlistForm)
        const delButton = document.querySelector(`#delete-setlist-${setlist.id}`)
        delButton.addEventListener('click', setlistsAdapter.deleteSetlist) 
    }
    
}