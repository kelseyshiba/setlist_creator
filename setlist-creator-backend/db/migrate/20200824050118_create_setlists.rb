class CreateSetlists < ActiveRecord::Migration[6.0]
  def change
    create_table :setlists do |t|
      t.string :date

      t.timestamps
    end
  end
end
