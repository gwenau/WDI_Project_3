require 'json'

class ChatController < ApplicationController

  @@chatlines = []

  # GET /chat
  # GET /chat.json
  def index

    @username = params["username"] || ""
    if @@chatlines.length > 10
      @lines = @@chatlines[-10, 10]
    else
      @lines = @@chatlines
    end

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @lines }
    end

  end

  # POST /chat
  # POST /chat.json
  def create
    @chat = params[:lines]
    binding.pry

      respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @lines }
    end
  end

  # respond_to do |format|
  #   format.html # index.html.erb
  #   format.json { render json: @lines }
  # end

end