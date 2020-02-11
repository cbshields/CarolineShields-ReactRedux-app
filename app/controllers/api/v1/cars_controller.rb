class Api::V1::CarsController < ApplicationController
  before_action :get_dealership

  def index
    render json: @dealership.cars
  end

  def show
    # @car = Car.find(params[:id])
    @car = @dealership.cars.find_by(id: params[:id])
    render json: @car
  end

  def create
    @car = @dealership.cars.new(car_params)
    if @dealership.add_inventory
      @car.save
      render json: @dealership
    else
      render json: {error: 'Error entering car information'}
    end
  end

  def destroy

    @car = Car.find(params[:id])
    @dealership = Dealership.find(@car.dealership_id)
    if @dealership.remove_inventory
        @car.destroy
        render json: @dealership
    end
  end

  private
  def car_params
    params.require(:car).permit(
      :make,
      :model,
      :year,
      :color,
      :price,
      :dealership_id
    )
  end

  def get_dealership
    @dealership = Dealership.find(params[:dealership_id])
  end

end
