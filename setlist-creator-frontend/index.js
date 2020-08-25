const BASE_URL = "http://localhost:3000"

const SETLISTS_URL =`${BASE_URL}/setlists`
const header = document.querySelector('header');
const allSongs = document.querySelector('.all-songs');

allSongs.innerHTML =`<h3 lead text-center>Songs</h3>`
const addSongButton = document.createElement('button')
const formToggle = document.querySelector('.form-toggle')
const newForm = document.createElement('div');

const songsAdapter = new SongsAdapter

document.addEventListener("DOMContentLoaded", () => {
    songsAdapter.fetchSongs();
    addButton();
    
});

function addButton(){
    addSongButton.innerHTML =`Add New Song`
    addSongButton.className = `btn btn-primary`
    formToggle.appendChild(addSongButton);
    addSongButton.addEventListener('click', addNewSong)
}

function addNewSong(){
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
    submitButton.addEventListener('click', addSongToDOM)
}

function addSongToDOM(e){
    e.preventDefault();
    addSongButton.style.display = 'block';
    let formHide = document.querySelector('#add-form')
    formHide.style.display = 'none';
    let songTarget = e.target.parentNode.children 
    //{id:, type: attributes: {artist, key, title}}

    let newSong = {
        title: songTarget[1].value,
        artist: songTarget[4].value,
        key: songTarget[7].value
    }

    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newSong)
    }

    fetch(SONGS_URL, configObj)
    .then(resp => resp.json())
    .then(json => renderSong(json.data))
    
}

function updateSong(e){
    let songId = e.target.parentElement.id.split("-")[2]
    let song = Song.findById(songId)

    let songArr = e.target.parentNode.parentNode.innerText.split("||");
    let songtitle = songArr[0]
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
        <input id="update-submit" type="submit" class='btn btn-success'>
    </form>`

    let formDiv = document.createElement('div');
    formDiv.id = `update-form-${songId}`
    formDiv.innerHTML = updateForm;
    song.element.querySelector.append(formDiv)
}

function deleteSong(e){
    let deleteId = { id: e.target.id.split("-")[2] }

    let configObj = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(deleteId)
    }

    fetch(SONGS_URL + `/${e.target.id.split("-")[2]}`, configObj)
    .then(resp => resp.json())
    .then(json => removeSong(json.data))
}

function removeSong(song){
    let removedSong = document.querySelector(`#song-${song.id}`)
    removedSong.remove();
}
