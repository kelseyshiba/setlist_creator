class Song {
    static all = []

    constructor({title, artist, key, tempo, id}){
        this.title = title
        this.artist = artist
        this.key = key
        this.tempo = tempo
        this.id = id

        Song.all.push(this);
    }

    static findById(id){
        return Song.all.find(song => song.id == id)
    }
    
    static dragListeners(){
        allSongs.addEventListener('dragover', this.dragover_handler)
        allSongs.addEventListener('dragenter', this.dragenter_handler)
        allSongs.addEventListener('dragleave', this.dragleave_handler)
        allSongs.addEventListener('drop', this.drop_handler)
    }
    
    renderSong(song){
        let songDiv = document.createElement('div')
        songDiv.innerHTML = `<i class="fas fa-grip-vertical"></i>     
        ${song.title} <span>&#9830</span> ${song.artist} <span>&#9830</span>  ${song.key} <span>&#9830</span> ${song.tempo} <button id='update-song-${song.id}' class='btn btn-warning'><i class="far fa-edit"></i></button><button id='delete-song-${song.id}' class='btn btn-danger'><i class="far fa-trash-alt"></i></span></button>`;
        songDiv.id = `song-${song.id}`;
        songDiv.draggable = 'true';
        songDiv.className = 'border border-secondary rounded';
        songDiv.addEventListener('ondrop', this.ondrop_handler)
        allSongs.appendChild(songDiv);
       
        const editButton = document.querySelector(`#update-song-${song.id}`)
        editButton.addEventListener('click', this.updateSongForm, true)
        
        const delButton = document.querySelector(`#delete-song-${song.id}`)
        delButton.addEventListener('click', songsAdapter.deleteSong)
        songDiv.addEventListener('dragstart', this.dragstart_handler)
        songDiv.addEventListener('dragend', this.dragend_handler)
        
        this.addButton()
        let addSongButtonGrab = document.querySelector('#add-button')
        addSongButtonGrab.addEventListener('click', this.newSongForm)
    }

    addButton(){
        addSongButton.innerHTML =`Add New Song`
        addSongButton.id = 'add-button'
        addSongButton.className = `btn btn-primary`
        const formToggle = document.querySelector('.form-toggle')
        formToggle.appendChild(addSongButton);
    }
    
    newSongForm(){
        const addSongButton = document.querySelector('#add-button')
        addSongButton.style.display = 'none';
        const newForm = document.createElement('div');
        const formToggle = document.querySelector('.form-toggle')
        formToggle.appendChild(newForm);
        newForm.id = 'add-form';
        newForm.style.display = 'block';
        newForm.innerHTML =
        `<br>
        <h3 text-center>Add A New Song</h3>
        <hr>
        <form class='form-group'>
            <label for="song[title]">Title:</label>
            <input type="text" name='song[title]' class='form-control'><br>
            <label for="song[artist]">Artist:</label>
            <input type="text" name="song[artist]" class="form-control"><br>
            <label for="song[key]">Key: </label>
            <input type="text" name="song[key]" class="form-control"><br>
            <input id="new-submit" type="submit" class='btn btn-success'>
        </form>`
        const submitButton = document.querySelector('#new-submit');
        submitButton.addEventListener('click', songsAdapter.createSong)
    }

    updateSongForm(e){ 
        let songId = parseInt(e.currentTarget.id.split("-")[2])
        let song = Song.findById(songId)
        let songDivUpdate = document.querySelector(`#song-${songId}`)
        let songArr = e.currentTarget.parentNode.innerText.split("||");
        let songTitle = songArr[0]
        let songArtist = songArr[1]
        let songKey = songArr[2]
    
        let updateForm = `<br>
        <h3 text-center>Edit Song</h3>
        <hr>
        <form class='form-group'>
            <label for="song[title]">Title:</label>
            <input type="text" name='song[title]' class='form-control' value='${songTitle}'><br>
            <label for="song[artist]">Artist:</label>
            <input type="text" name="song[artist]" class="form-control" value='${songArtist}'><br>
            <label for="song[key]">Key: </label>
            <input type="text" name="song[key]" class="form-control" value='${songKey}'><br>
            <input id="update-submit-${songId}" type="submit" class='btn btn-success'>
        </form>`
    
        let formDiv = document.createElement('div');
        formDiv.id = `update-form-${songId}`
        formDiv.innerHTML = updateForm;
        songDivUpdate.append(formDiv)

        let updateSubmit = document.querySelector(`#update-submit-${songId}`)
        updateSubmit.addEventListener('click', songsAdapter.patchSong)
    }

    updateOnDom({id, title, artist, key}){
        this.id = id
        this.title = title
        this.artist = artist
        this.key = key
        
        let grabSong = document.querySelector(`div#song-${this.id}`)
        grabSong.innerHTML = `${this.title} || ${this.artist} || ${this.key} <button id='update-song-${this.id}' class='btn btn-warning'><i class="far fa-edit"></i></button><button id='delete-song-${this.id}' class='btn btn-danger'><i class="far fa-trash-alt"></i></span></button>`

        const editButton = document.querySelector(`#update-song-${this.id}`)
        editButton.addEventListener('click', this.updateSongForm, true)
        
        const delButton = document.querySelector(`#delete-song-${this.id}`)
        delButton.addEventListener('click', songsAdapter.deleteSong)
    }

    dragstart_handler(e){
        e.dataTransfer.setData('text/plain', e.target.id)
        e.dataTransfer.dropEffect = 'move';
    }

    // dragend_handler(e){
       
    // }


    //accept drops for the allSongDiv (class)
    static dragover_handler(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    static dragleave_handler(e){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }

    static dragenter_handler(e){
        e.preventDefault()
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }

    static drop_handler(e){
        e.preventDefault()
        const data = e.dataTransfer.getData('text/plain');
        e.currentTarget.appendChild(document.getElementById(data))//song-id (8)
        this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        let song = document.querySelector(`#${data}`)
        song.children[4].style.display = '';
        song.children[5].style.display = '';
        setlistsongsAdapter.deleteSetlistSong(e)

        for (div of allSongs.children){
            console.log(div.innerText.split("♦")[0])
        }
        // allSongs.children.forEach(songDiv => {
        //     console.log(songDiv.innerText.split(("♦")[0])
        // })
       
        //grab everything and sort it
    }
    //prevent drop on song instance
    ondrop_handler(e){
        console.log(e)
        e.preventDefault()
    }
    
}