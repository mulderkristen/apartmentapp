class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :street
      t.string :city
      t.string :state
      t.integer :postal_code
      t.string :country
      t.string :price
      t.string :manager_name
      t.string :manager_phone
      t.string :contact_hours
      t.string :description

      t.timestamps
    end
  end
end
