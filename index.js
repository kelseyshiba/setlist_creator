const header = document.querySelector('header');

const allSongs = document.querySelector('.all-songs');
const allSongsTitle = document.querySelector('#all-songs-title')
allSongsTitle.innerHTML = `<h3 lead text-center>Songs</h3>`
const addSongButton = document.createElement('button')

const allSetlists = document.querySelector('#all-setlists')
const allSetlistsTitle = document.querySelector('#all-setlists-title')
allSetlistsTitle.innerHTML = `<section class='title-section'><h3 lead text-center>Set Lists <button id='add-setlist' class='btn btn-success'>+</button><button id='print-setlist' class='btn btn-secondary'><i class="fas fa-print"></i></button></h3><section>`
const print = document.querySelector(`#print-setlist`)
print.addEventListener('click', Setlist.printSet) 


const songsAdapter = new SongsAdapter
const setlistsAdapter = new SetlistsAdapter
const setlistsongsAdapter = new SetlistSongsAdapter

document.addEventListener("DOMContentLoaded", () => {
    songsAdapter.fetchSongs();
    setlistsAdapter.fetchSetlists();
    Song.dragListeners();
});






