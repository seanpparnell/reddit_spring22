class Api::SubsController < ApplicationController
  # Traffic directors, it will lead to the model/db or return data back 
  # Only actions
  # actions functionality you are doing in the back end, CRUD actions 
  # Skinny controller / fat models, so all logic with the sub as a class should be in the model
  # all CRUD actions and other actions, they be in the controller 
  # a controller action is rep a method 
  # return a HTML, XML, JSON or redirect to a action that does
  # JSON - js object notation, this is something rails and react understand
  # callbacks, trigger based off of a before or after a action is called
  # *before_action
  # after_action 
  # skip_before_action
  # skip_after_action
  # before_action :verify_user, only: [:index] 
  # before_action :verify_user, except: [:index] 

  # def verify_user
  #   # make sure they are logged in
  # end

  # all controller inherit the application controller
  # anything with all controllers you would put in the application controller.

  # actions 
  # index -> see all of the items 
  # show, needs an id, show a single a item 
  # create, data of the fields, and create an item, only works if it pass the params, and the model validations
  # update, need an id, and fields that are change, update an item ,  only works if it pass the params, and the model validations
  # destroy, need an id, delete and item 

  # pattern to follow to fill out the controller
  # to follow the pattern replace, model_name with the model
  # and follow casing and plural
  # before_action :set_model_name, only: [:show, :update, :destroy]

  # def index 
  #   render json: Model_name.all 
  # end

  # def show 
  #   # @model_name = Model_name.find(params[:id])
  #   render json: @model_name
  # end 

  # def create
  #   @model_name = Model_name.new(model_name_params)
  #   if @model_name.save
  #     render json: @model_name
  #   else
  #     render json: { errors: @model_name.errors }, status: :unprocessable_entity 
  #   end
  # end

  # def update
  #   # @model_name = Model_name.find(params[:id])
  #   if @model_name.update(model_name_params)
  #     render json: @model_name
  #   else
  #     render json: { errors: @model_name.errors }, status: :unprocessable_entity 
  #   end
  # end

  # def destroy
  #   # @model_name = Model_name.find(params[:id])
  #   @model_name.destroy
  #   render json: { message: 'Model_name deleted' }
  # end

  # private # only run in the class 
  #   def model_name_params
  #     params.require(:model_name).permit(:attr, :attr2)
  #   end

  #   def set_model_name
  #     @model_name = Model_name.find(params[:id])
  #   end

  # next step after the controller the controller is filled out, we are going to do the react side to do the components

  # model_name -> Sub
  
  before_action :set_sub, only: [:show, :update, :destroy]

  def index 
    render json: Sub.all
  end

  def show 
    # @sub = Sub.find(params[:id])
    render json: @sub
  end 

  def create
    @sub = Sub.new(sub_params)
    if @sub.save
      render json: @sub
    else
      render json: { errors: @sub.errors },  status: :unprocessable_entity
    end
  end

  def update
    # @sub = Sub.find(params[:id])
    if @sub.update(sub_params)
      render json: @sub
    else
      render json: { errors: @sub.errors },  status: :unprocessable_entity
    end
  end

  # def destroy
  #   @model_name = Model_name.find(params[:id])
  #   @model_name.destroy
  #   render json: { message: 'Model_name deleted' }
  # end
  def destroy
    # @sub = Sub.find(params[:id])
    @sub.destroy
    render json: { message: 'Sub delete'}
  end

  private 
    # make sure we are passing the right fields 
    # controller validations
    # permitting
    # { sub: { title: 'travel' } }

    # not permitted 
    # { person: { body: 'travel' } }

    # sql injection 
    # { sub: { title: 'SELECT * CCNUM FROM DB' } }

    def sub_params
      params.require(:sub).permit(:title)
    end

    def set_sub
      @sub = Sub.find(params[:id])
    end
  
end