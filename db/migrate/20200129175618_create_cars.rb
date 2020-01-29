class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.string  :color
      t.integer :price
      t.boolean :available, default: true, null: false
      t.integer :dealership_id

      t.timestamps
    end
  end
end
