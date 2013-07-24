Travellerapp::Application.routes.draw do
 root :to => 'home#index'
 resources :users, :only => [:index, :new, :create]
 resources :coffeeshops, :only => [:index, :create, :update, :new]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  get '/logout' => 'session#destroy'
end