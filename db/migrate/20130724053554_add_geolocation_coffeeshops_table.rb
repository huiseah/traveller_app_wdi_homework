class AddGeolocationCoffeeshopsTable < ActiveRecord::Migration
  def change
  	add_column :coffeeshops, :address, :text
  	add_column :coffeeshops, :latitude, :float, :default => 0
  	add_column :coffeeshops, :longitude, :float, :default => 0
  end
end
