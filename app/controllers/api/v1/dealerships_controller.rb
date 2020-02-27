class Api::V1::DealershipsController < ApplicationController


    def index
      @dealerships = Dealership.all
      render json: @dealerships
    end

    def show
      @dealership = Dealership.find(params[:id])
      render json: @dealership
    end

    def create
      @dealership = Dealership.new(dealership_params)
      if @dealership.save
         render json: @dealership
      else
        render json: {error: 'Error entering dealership information'}
      end
    end

    def update

      @dealership = Dealership.find(params[:id])
      # @dealership.update(name: params["dealership"]["name"])
      # dealershipfields = {}
      # params.each do |key, value|
      #     if value != "" && key != "controller" && key != "action" && key != "dealership"
      #       dealershipfields[key] = value
      #     end
      #   end
      # @dealership.update(dealershipfields)
      @dealership.update(dealership_params)
      @dealership.save
      render json: @dealership


    end

    def destroy
      @dealership = Dealership.find(params[:id])
      @dealership.delete

    end

    private
    def dealership_params
      params.require(:dealership).permit(
        :id,
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
