class CarSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year, :price, :available, :dealership_id
  belongs_to :dealership
end
