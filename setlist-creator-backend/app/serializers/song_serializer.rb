class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :artist, :key, :tempo, :id
end
