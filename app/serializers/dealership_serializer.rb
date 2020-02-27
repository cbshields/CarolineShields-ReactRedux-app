class DealershipSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :zip, :phone, :inventory, :editing
  has_many :cars
end
