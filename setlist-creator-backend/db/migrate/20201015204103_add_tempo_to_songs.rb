class AddTempoToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :tempo, :string
  end
end
