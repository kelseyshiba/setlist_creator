const BASE_URL = "http://localhost:3000"
//keep
const header = document.querySelector('header');
//move?
const allSongs = document.querySelector('.all-songs');
allSongs.innerHTML =`<h3 lead text-center>Songs</h3>`
const addSongButton = document.createElement('button')
const formToggle = document.querySelector('.form-toggle')
const newForm = document.createElement('div');
//keep
const songsAdapter = new SongsAdapter
const setlistsAdapter = new SetlistsAdapter

document.addEventListener("DOMContentLoaded", () => {
    songsAdapter.fetchSongs();
    setlistsAdapter.fetchSetlists();
    titleAdds();
});

function titleAdds(){
    const allSetlists = document.querySelector('#all-setlists')
    allSetlists.innerHTML = `<h3 lead text-center>Set Lists</h3>`
}




