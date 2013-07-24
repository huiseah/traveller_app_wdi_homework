class UsersController < ApplicationController
	before_filter :check_if_logged_in, :except => [:new, :create]
  	before_filter :check_if_admin, :only => [:index, :destroy]

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

	 private
	  def check_if_logged_in
	    redirect_to(root_path) if @auth.nil?
	  end

	  def check_if_admin
	    redirect_to(root_path) if @auth.nil? || !@auth.is_admin?
	  end
end
