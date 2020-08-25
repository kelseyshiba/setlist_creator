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
        songDiv.innerHTML = `${song.attributes.title} || ${song.attributes.artist} || ${song.attributes.key} <button id='update-song-${song.id}' class='btn btn-warning'><i class="far fa-edit"></i></button><button id='delete-song-${song.id}' class='btn btn-danger'><i class="far fa-trash-alt"></i></span></button>`;
        songDiv.id = `song-${song.id}`;
        songDiv.classList.add('song');
        allSongs.appendChild(songDiv);
        const editButton = document.querySelector(`#update-song-${song.id}`)
        editButton.addEventListener('click', updateSong)
        const delButton = document.querySelector(`#delete-song-${song.id}`)
        delButton.addEventListener('click', deleteSong)
    }
    
}