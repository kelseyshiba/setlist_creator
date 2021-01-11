class Song {
    static all = []

    constructor({title, artist, key, id}){
        this.title = title
        this.artist = artist
        this.key = key 
        this.id = id

        Song.all.push(this);
    }

    static findById(id){
        return Song.all.find(song => song.id == id)
    }
<<<<<<< HEAD
=======
    //Events for ALL SONG CONTAINER
>>>>>>> f47db1b19a18d772c4394d6bf4ac5e0ca9fcff88
    static dragListeners(){
        allSongs.addEventListener('dragover', this.dragover_handler)
        allSongs.addEventListener('dragenter', this.dragenter_handler)
        allSongs.addEventListener('dragleave', this.dragleave_handler)
        allSongs.addEventListener('drop', this.drop_handler)
    }
<<<<<<< HEAD
    //{title: "At Last ", artist: " Etta James ", key: " F", id: 1}
=======
    
    //Attaching song to DOM
>>>>>>> f47db1b19a18d772c4394d6bf4ac5e0ca9fcff88
    renderSong(song){
        let songDiv = document.createElement('div')
        songDiv.innerHTML = `${song.title} || ${song.artist} || ${song.key} <button id='update-song-${song.id}' class='btn btn-warning'><i class="far fa-edit"></i></button><button id='delete-song-${song.id}' class='btn btn-danger'><i class="far fa-trash-alt"></i></span></button>`;
        songDiv.id = `song-${song.id}`;
        songDiv.draggable = 'true';
        songDiv.className = 'border border-secondary rounded';
        allSongs.appendChild(songDiv);
        //buttons and listeners
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

    //New Song Form
    addButton(){
        addSongButton.innerHTML =`Add New Song`
        addSongButton.id = 'add-button'
        addSongButton.className = `btn btn-primary`
        const formToggle = document.querySelector('.form-toggle')
        formToggle.appendChild(addSongButton);
    }
    
    //Render Form
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

<<<<<<< HEAD
    updateSongForm(e){
        //console.log(this) button id update song 
=======
    //Editing a Song
    updateSongForm(e){ 
>>>>>>> f47db1b19a18d772c4394d6bf4ac5e0ca9fcff88
        let songId = parseInt(e.currentTarget.id.split("-")[2])
        let song = Song.findById(songId)
        let songDivUpdate = document.querySelector(`#song-${songId}`)
        let songArr = e.currentTarget.parentNode.innerText.split("♦");

        let songTitle = songArr[0]
        let songArtist = songArr[1]
        let songKey = songArr[2]
        let songTempo = songArr[3]
    
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
            <input type="text" name="song[tempo]" class="form-control" value='${songTempo}'><br>
            <input id="update-submit-${songId}" type="submit" class='btn btn-success'>
        </form>`
    
        let formDiv = document.createElement('div');
        formDiv.id = `update-form-${songId}`
        formDiv.innerHTML = updateForm;
        songDivUpdate.append(formDiv)

        let updateSubmit = document.querySelector(`#update-submit-${songId}`)
        updateSubmit.addEventListener('click', songsAdapter.patchSong)
    }
<<<<<<< HEAD
//{title: "At Last ", artist: " Etta James ", key: " F", id: 1}
    updateOnDom({id, title, artist, key}){
=======

    //render update
    updateOnDom({id, title, artist, key, tempo}){
>>>>>>> f47db1b19a18d772c4394d6bf4ac5e0ca9fcff88
        this.id = id
        this.title = title
        this.artist = artist
        this.key = key
        this.tempo = tempo
        
        let grabSong = document.querySelector(`div#song-${this.id}`)
        grabSong.innerHTML = `${this.title} ♦ ${this.artist} ♦ ${this.key} ♦ ${this.tempo}<button id='update-song-${this.id}' class='btn btn-warning'><i class="far fa-edit"></i></button><button id='delete-song-${this.id}' class='btn btn-danger'><i class="far fa-trash-alt"></i></span></button>`

        const editButton = document.querySelector(`#update-song-${this.id}`)
        editButton.addEventListener('click', this.updateSongForm, true)
        
        const delButton = document.querySelector(`#delete-song-${this.id}`)
        delButton.addEventListener('click', songsAdapter.deleteSong)
    }

    dragstart_handler(e){
        e.dataTransfer.setData('text/plain', e.target.id)//e.target.id)
        e.dataTransfer.dropEffect = 'move';
    }

    dragend_handler(e){
       
    }


    //accept drops
    static dragover_handler(e){
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    static dragleave_handler(e){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }

    static drop_handler(e){
        e.preventDefault()
        debugger
        const data = e.dataTransfer.getData('text/plain');
        e.currentTarget.appendChild(document.getElementById(data))//song-id (8)
        this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        setlistsongsAdapter.deleteSetlistSong(e)
<<<<<<< HEAD
=======

        // let songList = allSongs.children
        // songList = Array.prototype.slice.call(songList)
       
        // console.log(songList.sort((a,b)=> a.innerText.split("♦")[0]-b.innerText.split("♦")[0]))
       
        //grab everything and sort it
>>>>>>> f47db1b19a18d772c4394d6bf4ac5e0ca9fcff88
    }

    static dragenter_handler(e){
        e.preventDefault()
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }
    
}