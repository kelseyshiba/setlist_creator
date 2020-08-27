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
        byebug
    end
end
