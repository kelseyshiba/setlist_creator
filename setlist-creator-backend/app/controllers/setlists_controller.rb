class SetlistsController < ApplicationController
    def index
        setlists = Setlist.all 
        render json: SetlistSerializer.new(setlists)
    end

    def show
        setlist = Setlist.find_by_id(params[:id])
        render json: SetlistSerializer.new(setlist)
    end

    def update
        setlist = Setlist.find_by_id(params[:id])
        setlist.update(setlist_params)
        render json: SetlistSerializer.new(setlist)
    end

    def create
        setlist = Setlist.new(setlist_params)
        if setlist.save
            render json: SetlistSerializer.new(setlist)
        else
            alert('Setlist not created. Please try again.')
        end
    end

    def destroy
        setlist = Setlist.find_by_id(params[:id])
        setlist.destroy
        render json: {message: "Successfully deleted #{setlist.name}!"}
    end

    private

    def setlist_params
        params.require(:setlist).permit(:name, :date, :id)
    end

end
