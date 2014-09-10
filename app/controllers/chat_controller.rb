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

    # respond_to do |format|
    #   format.html # index.html.erb
    #   format.json { render json: @lines }
    # end

  end

  # POST /chat
  # POST /chat.json
  def create
    requirements = %w{username message}
    if requirements.all? { |x| params.has_key? x }
      @@chatlines << {:username => params["username"], :timestamp => Time.now().to_i, :message => params["message"]}
      if request.xhr? and params.has_key? "since"
        return [200, {"Content-Type" => "application/json"}, JSON.generate(@@chatlines.select { |x| x[:timestamp] > params["since"].to_i })]
      end
    end
    redirect to '/?username=' + params["username"]
  end

  # respond_to do |format|
  #   format.html # index.html.erb
  #   format.json { render json: @lines }
  # end

end