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
});

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


