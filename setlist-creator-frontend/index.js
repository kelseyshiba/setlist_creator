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






