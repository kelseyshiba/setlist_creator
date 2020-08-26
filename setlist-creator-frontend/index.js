const BASE_URL = "http://localhost:3000"
//keep
const header = document.querySelector('header');
//move?
const allSongs = document.querySelector('.all-songs');
allSongs.innerHTML =`<h3 lead text-center>Songs</h3>`
const addSongButton = document.createElement('button')
const formToggle = document.querySelector('.form-toggle')// if use in 1 function, unless multiple js files
const newForm = document.createElement('div');
//keep
const songsAdapter = new SongsAdapter
const setlistsAdapter = new SetlistsAdapter

document.addEventListener("DOMContentLoaded", () => {
    songsAdapter.fetchSongs();
    setlistsAdapter.fetchSetlists();
  
});






