class Setlist < ApplicationRecord
    has_many :setlist_songs
    has_many :songs, through: :setlist_songs
end
