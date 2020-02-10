class Dealership < ApplicationRecord
  has_many :cars
  validates :name, :inventory, presence: true

  def add_inventory
    self.inventory = self.inventory + 1
    self.save
  end

  def remove_inventory
    self.inventory = self.inventory - 1
    self.save
  end
end
