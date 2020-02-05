class Api::V1::CarsController < ApplicationController
  defore_action: get_dealership

  def index
    render json: @dealership.cars
  end

  def create
    @car = Car.new(car_params)
    if @car.save
      render json: @account
    else
      render json: {error: 'Error entering car information'}
  end

  def show
    @car = Car.find(params[:id])
    render json: @car
  end

  def destroy
    @car = Car.find(params[:id])
    @car.delete
    # update car inventory
    # @dealership = Dealership.find(@dealer_id)
    # @dealership = @dealership.inventory - 1
    # @dealership.save
  end

  private
  def car_params
    params.require(:car).permit(
      :make,
      :model,
      :year,
      :color,
      :price,
      :available,
      :dealership_id
    )
  end

  def get_dealership
    @dealership = Dealership.find(params[:dealership_id])

  end
end
