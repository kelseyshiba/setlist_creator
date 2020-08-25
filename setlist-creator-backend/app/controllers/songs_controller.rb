class SongsController < ApplicationController
    def index
        songs = Song.all
        render json: SongSerializer.new(songs)
    end

    def show
        song = Song.find_by_id(params[:id])
        render json: SongSerializer.new(song)
    end

    def create
        song = Song.new(song_params)
        if song.save 
            render json: SongSerializer.new(song)
        else
            render json: {error: 'could not be created.'}
        end
    end

    def destroy
        song = Song.find_by_id(params[:id])
        song.destroy
        render json: SongSerializer.new(song)
    end

    private

    def song_params
        params.require(:song).permit(:title, :artist, :key)
    end
end
