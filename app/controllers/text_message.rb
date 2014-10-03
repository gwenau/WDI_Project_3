class TextMessage
  def initialize content, to_number
    # Creating multiple instance variables in one line.
    @content, @to_number = content, to_number
    self
  end

  # It seems like to get any key out of zhsrc, use ENV["x"]
  def client
    @client ||= Twilio::REST::Client.new(ENV["TWILIO_SID"], ENV["TWILIO_AUTH"])
  end

  def send
    # client method defined above.
    client.account.sms.messages.create(
      body: @content,
      to: @to_number,
      from: ENV["TWILIO_NUM"]
      )
  end
end