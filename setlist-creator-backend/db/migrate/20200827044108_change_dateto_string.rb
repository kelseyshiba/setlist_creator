class ChangeDatetoString < ActiveRecord::Migration[6.0]
  def change
    change_column :setlists, :date, :string
  end
end
