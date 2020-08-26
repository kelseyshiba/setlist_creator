class SetlistsController < ApplicationController
    def index
        setlists = Setlists.all 
        render json: SetlistSerializer.new(setlists)
    end

    def show

    end

end
