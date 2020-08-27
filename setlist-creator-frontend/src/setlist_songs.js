class SetlistSong {

    static all = [];

    constructor({song_id, setlist_id, id}){
        this.song_id = song_id,
        this.setlist_id = setlist_id,
        this.id = id

        SetlistSong.all.push(this)
    }
}