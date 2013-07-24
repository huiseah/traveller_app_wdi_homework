class CoffeeshopsController < ApplicationController
  before_filter :ensure_logged_in

  def index
    @coffeeshops = @auth.coffeeshops
  end

  def create
  	name = params[:name]
  	address = params[:address]
    user_id = params[:user_id]
  	
  	coffeeshop = Coffeeshop.create(:name => name, :address => address, :user_id => user_id)
  	@auth.coffeeshops << coffeeshop

  	render :json => coffeeshop
  end

  def update
  	id = params[:id]

  	coffeeshop = Coffeeshop.find(id)
  	coffeeshop.update_attributes(params[:coffeeshop])

  	render :json => coffeeshop
  end

end