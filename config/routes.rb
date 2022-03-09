Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/") only for rails views
  # root "articles#index"

  # API Routes
  # a way to link up to the controller
  # react side to use 

  # backend as a api and also the controllers will be in the api folder
  # http request 
  # communicate in the browser
  # have react communicate to the rails side using these routes 
  # GET  -> READ
  # POST  -> Create
  # PUT / PATCH -> update
  # DELETE  -> destroy 
  # namespace :api do 
    # where all our routes will be in 
    # http verb 'url path', to: 'controller#action'
    # get '/people', to: 'people#index'

    # this will create all of the routes for all base crud actions
    # resources :subs do 
    #   resources :topics
    # end

    # do not do this for 3 levels 
    # resources :subs do 
    #   resources :topics do 
    #     resources :comments do
    #       resources :likes
    #     end
    #   end
    # end

    # resources :topics, except: [:index, :show, :update, :create, :destroy] do 
    #   resources :comments
    # end

    # resources :comments, except: [:index, :show, :update, :create, :destroy] do 
    #   resources :likes
    # end


    # resources :subs, only: [:index, :show, :update]
    # resources :subs, except: [:create, :destroy]

    # if you want add a route with a model of parent and child
    #  always go two level deep at most 
    
    # resources :parents do
    #   resources :childs
    # end

    # resources :parents except: [:index, :show, :update, :create, :destroy] do
      #   resources :childs
      # end

    # :id or :parent_id placeholder for the actual value
    # /api/subs/1
    # /api/subs/2
    # /api/subs/3
    # /api/subs/:id

  # end

  namespace :api do

    resources :subs do 
      resources :topics
    end

    resources :topics, except: [:index, :show, :update, :create, :destroy] do 
      resources :comments
    end
    
  end

end