class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :artist, :key, :id
end
