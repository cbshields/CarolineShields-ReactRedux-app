class Dealership < ApplicationRecord
  has_many :cars
  validates :name, :inventory, presence: true

  def update_inventory(car)
    if car.available == $true
      self.inventory = self.inventory + 1
    else
      self.inventory = self.inventory - 1
    end
    self.save
  end

  def remove_inventory
    self.inventory = self.inventory - 1
    self.save
  end
end
