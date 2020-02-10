class CarSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year, :color, :price, :dealership_id
  belongs_to :dealership
end
