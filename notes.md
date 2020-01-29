Dealership
has_many :cars
:name - string, :location - string, :phone - string


Cars
belongs_to :Dealership
:make - string, :model - string, :year - integer, :price - decimal, :available boolean
