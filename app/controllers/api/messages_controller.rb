class Api::MessagesController < ApplicationController
  def index
    greeting = Message.order("RANDOM()").first.greeting
    render json: { message: greeting }
  end
end
