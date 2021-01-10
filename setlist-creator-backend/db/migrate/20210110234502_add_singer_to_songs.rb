class AddSingerToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :singer, :string
  end
end
