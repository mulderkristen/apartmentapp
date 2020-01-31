class Apartment < ApplicationRecord
    belongs_to :user
    validates :street, :city, :state, :postal_code, :country, :price, :manager_name, :manager_phone, :contact_hours, :description, :user_id, presence: true
end
