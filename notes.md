Resources
1. Planning Form: https://docs.google.com/document/d/1CWw3DvfusUHGUSdGlWHF1B6ybMCntxARdgXiJtYI0m8/edit?ts=5de69bbd#
2. Resources: https://docs.google.com/document/d/1CWw3DvfusUHGUSdGlWHF1B6ybMCntxARdgXiJtYI0m8/edit?ts=5de69bbd#

Command to start rails/npm: rake start
=========================================================================================
Dealership
has_many :cars
:name - string, :location - string, :phone - string


Car
belongs_to :Dealership
:make - string, :model - string, :year - integer, :price - decimal, :available boolean


Routes
  -since we moved our controllers to a "version" folder (v1), we need to setup namespaces, then our fetch urls will
   look like this: fetch('http://localhost:3000/api/v1/cars')

Controllers
  -we will need to namespace these as well (ex: Api::V1:CarsController)
