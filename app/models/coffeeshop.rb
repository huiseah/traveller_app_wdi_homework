# == Schema Information
#
# Table name: coffeeshops
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  address    :text
#  latitude   :float            default(0.0)
#  longitude  :float            default(0.0)
#

class Coffeeshop < ActiveRecord::Base
	before_save :geocode
	
	attr_accessible :name, :address, :user_id
	belongs_to :user

	private 
		def geocode
			result = Geocoder.search(self.address).first

			if result.present?
				self.latitude = result.latitude
				self.longitude = result.longitude
		end
	end
end