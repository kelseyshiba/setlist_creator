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

        const setlistDiv = document.createElement('div')
        setlistDiv.id = `setlist-${setlist.id}`
        setlistDiv.addEventListener('dragover', this.dragover_handler)
        setlistDiv.addEventListener('dragenter', this.dragenter_handler)
        setlistDiv.addEventListener('dragleave', this.dragleave_handler)
        setlistDiv.addEventListener('drop', this.drop_handler)
        setlistDiv.className = `setlist border border-secondary rounded`
        setlistDiv.innerHTML = `<div id='inner-setlist-div-${setlist.id}'><h4 class='text-center'>${setlist.name} <button id='edit-setlist-${setlist.id}' class='btn btn-warning'><i class="far fa-edit"></i></button><button id='delete-setlist-${setlist.id}' class='btn btn-danger'><i class="far fa-trash-alt"></i></span></button></h4><p class='text-center'>${setlist.date}</p><br></div>`

        allSetlists.appendChild(setlistDiv)

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
        updateForm.className = `update-form`
        updateForm.innerHTML = 
        `<form class='form-group'>
        <h4 class='text-center'>Edit Setlist</h4><br>
        
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

    dragover_handler(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    dragleave_handler(e){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }

    drop_handler(e){
        e.preventDefault()
        const song_id = e.dataTransfer.getData('text/plain');
        let songSetDiv = document.getElementById(song_id)
        if (song_id === `song-${song_id.split("-")[1]}`) {
            e.currentTarget.appendChild(document.getElementById(song_id))
            this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            songSetDiv.children[4].style.display = 'none';
            songSetDiv.children[5].style.display = 'none';
            setlistsongsAdapter.createSetlistSong(e)
        
        } else {
            let tmp = document.createElement('div');
            tmp.className = 'hide';
            let drop_target = songSetDiv.nextSibling
            let drag_target = songSetDiv
            drop_target.before(tmp)
            drag_target.before(drop_target)
            tmp.replaceWith(drag_target)
        } 
    }
    ondrop_handler(e){
        e.preventDefault()
        console.log("ondropevent", e.currentTarget)
    }
    dragenter_handler(e){
        //e.preventDefault()
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
    
    static printSet(e){
        let myWindow = window.open('', 'PRINT', 'height=400, width=600')

        myWindow.document.write(`<html><head><title>` + document.title + '</title>');
        myWindow.document.write('</head><body >');
        myWindow.document.write('<h1>' + document.title  + '</h1>');
        myWindow.document.write(document.getElementById('all-setlists').innerHTML);
        let buttons = myWindow.document.querySelectorAll('button')
        for (let i = 0; i < buttons.length; i++){
            buttons[i].style.display = 'none';
        }
        myWindow.document.write('</body></html>');
        myWindow.document.close(); // necessary for IE >= 10
        myWindow.focus(); // necessary for IE >= 10*/
    
        myWindow.print();
        myWindow.close();
    
        return true;
    }

}