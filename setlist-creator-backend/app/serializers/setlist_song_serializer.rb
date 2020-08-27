class SetlistSongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :song_id, :setlist_id, :id
  # belongs_to :song 
  # belongs_to :setlist

  attribute :song do |object|
    object.song.as_json
  end

  attribute :setlist do |object|
    object.setlist.as_json
  end
end
