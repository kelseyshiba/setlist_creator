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

    renderSong(song){
        let songDiv = document.createElement('div')
        songDiv.innerHTML = `${song.title} || ${song.artist} || ${song.key} <button id='update-song-${song.id}' class='btn btn-warning'><i class="far fa-edit"></i></button><button id='delete-song-${song.id}' class='btn btn-danger'><i class="far fa-trash-alt"></i></span></button>`;
        songDiv.id = `song-${song.id}`;
        songDiv.classList.add('song');
        allSongs.appendChild(songDiv);
        //buttons
        const editButton = document.querySelector(`#update-song-${song.id}`)
        editButton.addEventListener('click', updateSong)
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
    
}