Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      # resources :cars only if we want to see a list of all cars, regardless of dealership
      # api/v1/cars vs the nested route below of api/v1/dealership/1/cars
      resources :dealerships do
        resources :cars
      end
    end
  end


end
