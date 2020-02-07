class DealershipSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :zip, :phone, :inventory
  has_many :cars
end
