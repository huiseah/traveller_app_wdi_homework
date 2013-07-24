Travellerapp::Application.routes.draw do
 root :to => 'home#index'
 resources :users, :only => [:index, :new, :create]
 resources :coffeeshops, :only => [:index, :create, :update]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'
end