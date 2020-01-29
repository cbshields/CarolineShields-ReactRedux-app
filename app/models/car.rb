class Car < ApplicationRecord
  belongs_to :dealership
  validates :make, :model, :year, :price, presence: true
end
