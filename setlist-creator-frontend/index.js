const header = document.querySelector('header');

const allSongs = document.querySelector('.all-songs');
allSongs.innerHTML =`<h3 lead text-center>Songs</h3>`;

const addSongButton = document.createElement('button')

const songsAdapter = new SongsAdapter
const setlistsAdapter = new SetlistsAdapter

document.addEventListener("DOMContentLoaded", () => {
    songsAdapter.fetchSongs();
    setlistsAdapter.fetchSetlists();
    Song.dragListeners();
});






