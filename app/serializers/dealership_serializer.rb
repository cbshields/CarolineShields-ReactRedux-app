class DealershipSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :zip, :inventory
  has_many :cars 
end
