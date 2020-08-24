class SetlistSongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :song_id, :setlist_id
  belongs_to :song 
  belongs_to :setlist
end
