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
    //{title: "At Last ", artist: " Etta James ", key: " F", id: 1}
    renderSong(song){
        let songDiv = document.createElement('div')
        songDiv.innerHTML = `${song.title} || ${song.artist} || ${song.key} <button id='update-song-${song.id}' class='btn btn-warning'><i class="far fa-edit"></i></button><button id='delete-song-${song.id}' class='btn btn-danger'><i class="far fa-trash-alt"></i></span></button>`;
        songDiv.id = `song-${song.id}`;
        songDiv.classList.add('song');
        allSongs.appendChild(songDiv);
        //buttons
        const editButton = document.querySelector(`#update-song-${song.id}`)
        editButton.addEventListener('click', this.updateSongForm, true)
        
        const delButton = document.querySelector(`#delete-song-${song.id}`)
        delButton.addEventListener('click', songsAdapter.deleteSong)
        
        this.addButton()
    }

    addButton(){
        addSongButton.innerHTML =`Add New Song`
        addSongButton.className = `btn btn-primary`
        formToggle.appendChild(addSongButton);
        addSongButton.addEventListener('click', this.newSongForm)
    }

    newSongForm(){
        addSongButton.style.display = 'none';
        
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
        //console.log(this) button id update song 
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
//{title: "At Last ", artist: " Etta James ", key: " F", id: 1}
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
    
}