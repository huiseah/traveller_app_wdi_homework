class HomeController < ApplicationController
	def index
    @coffeeshops = Coffeeshop.all
    # @users = User.all
  end

end