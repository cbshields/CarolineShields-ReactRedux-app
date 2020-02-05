class CreateDealerships < ActiveRecord::Migration[5.2]
  def change
    create_table :dealerships do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :phone
      t.integer :inventory

      t.timestamps
    end
  end
end
