class Dealership < ApplicationRecord
  has_many :cars
  validates :name, presence: true

  def update_inventory(car)
    
  end


end
