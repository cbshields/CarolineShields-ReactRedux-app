# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ds1 = Dealership.create(name: 'Joe''s Cars', address: '45 E Sunset', city: 'Scottsdale',state: 'AZ', zip: 85251)
ds2 = Dealership.create(name: 'Don Ford Trucks', address: '453 E Hollywood', city: 'Pittsburgh',state: 'PA', zip: 15212)

Car.create(make: "BMW", model: "328i", year: 1983, color: "Black", price: 9000, dealership_id: ds1.id)
Car.create(make: "Honda", model: "Accord", year: 2020, color: "Midnight Blue", price: 4000, dealership_id: ds2.id)
Car.create(make: "Kia", model: "Sport", year: 2016, color: "White", price: 3000, dealership_id: ds1.id)
