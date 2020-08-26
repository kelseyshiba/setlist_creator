class AddNameToSetlist < ActiveRecord::Migration[6.0]
  def change
    add_column :setlists, :name, :string
  end
end
