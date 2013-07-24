class UsersController < ApplicationController
	def index
		@users = User.order(:name)
	end

	def new
		@user = User.new
	end

	def create
		@user = User.create(params[:user])
		redirect_to(root_path)
	end
end
