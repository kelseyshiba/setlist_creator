class SetlistSongsController < ApplicationController
    def index
        setlistsongs = SetlistSong.all
        render json: SetlistSongSerializer.new(setlistsongs)
    end

    def show
        setlistsong = SetlistSong.find_by_id(params[:id])
        render json: SetlistSongSerializer.new(setlistsong)
    end

    def create
        #"setlist_song"=>{"song_id"=>"1", "setlist_id"=>"1"}} 
        setlistsong = SetlistSong.new(setlistsong_params)
        if setlistsong.save
            render json: SetlistSongSerializer.new(setlistsong)
        else
             alert('Setlist/Song Relationship not saved!')
        end
    end

    def destroy
        setlistsong = SetlistSong.find_by_id(params[:id])
        setlistsong.destroy
        render json: SetlistSongSerializer.new(setlistsong)
    end

    private

    def setlistsong_params
        params.require(:setlist_song).permit(:setlist_id, :id, :song_id)
    end
end
