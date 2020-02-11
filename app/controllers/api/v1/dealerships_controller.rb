class Api::V1::DealershipsController < ApplicationController


    def index
      @dealerships = Dealership.all
      render json: @dealerships
    end

    def create

      @dealership = Dealership.new(dealership_params)
      if @dealership.save
        render json: @dealership
      else
        render json: {error: 'Error entering dealership information'}
      end
    end

    def show
      @dealership = Dealership.find(params[:id])
      render json: @dealership
    end

    def update
      binding.pry
    end

    def destroy
      @dealership = Dealership.find(params[:id])
      @dealership.delete

    end

    private
    def dealership_params
      params.require(:dealership).permit(
        :name,
        :address,
        :city,
        :state,
        :zip,
        :phone,
        :inventory,
        :editing
      )
    end
end
