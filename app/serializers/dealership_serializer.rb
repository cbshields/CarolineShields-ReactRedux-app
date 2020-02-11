class DealershipSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :zip, :phone, :inventory, :editing
  has_many :cars
end
