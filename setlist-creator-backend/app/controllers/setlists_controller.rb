class SetlistsController < ApplicationController
    def index
        setlists = Setlist.all 
        render json: SetlistSerializer.new(setlists)
    end

    def show
        setlist = Setlist.find_by_id(params[:id])
        render json: SetlistSerializer.new(setlist)
    end

    def destroy
        setlist = Setlist.find_by_id(params[:id])
        setlist.destroy
        render json: {message: "Successfully deleted #{setlist.name}!"}
    end

end
