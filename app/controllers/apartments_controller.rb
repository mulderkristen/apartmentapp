class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end
    def show
        apartment = Apartment.find(params[:id])
        render json: apartment
    end
    def create
        apartment = Apartment.create(apartment_params)
            if apartment.valid?
                render json: apartment
            else
                render json: apartment.errors
            end
    end
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :postal_code, :country, :price, :manager_name, :manager_phone, :contact_hours, :description, :user_id)
    end
end
