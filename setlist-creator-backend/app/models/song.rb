class Song < ApplicationRecord
    has_many :setlist_songs, :dependent => :destroy
    has_many :setlists, through: :setlist_songs
end
