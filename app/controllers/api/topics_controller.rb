class Api::TopicsController < ApplicationController
  # for children controller we follow the pattern but need to explain who the parent it
  # before_action :set_parent 
  # private 
  # def set_parent 
  #   @parent = Parent.find(params[:parent_id])
  # end

  # Model_name -> @parent.child(s)
  # index don't .all , .child(s) does do a .all anyways

  before_action :set_sub 
  before_action :set_topic, only: [:show, :update, :destroy]

  def index
    # render json: Topic.all 
    render json: @sub.topics
  end

  def show
    render json: @topic
  end

  def create
    # @topic = Topic.new(topic_params)
    @topic = @sub.topics.new(topic_params)
    if @topic.save
      render json: @topic
    else
      render json: { errors: @topic.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @topic.update(topic_params)
      render json: @topic
    else
      render json: { errors: @topic.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @topic.destroy
    render json: { message: 'Topic Deleted'}
  end

  private 
    def set_sub
      @sub = Sub.find(params[:sub_id])
    end

    def set_topic
      # @topic = Topic.find(params[:id])
      @topic = @sub.topics.find(params[:id])
    end

    def topics_params
      params.require(:topic).permit(:title, :body)
    end
end