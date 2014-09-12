class Chat < ActiveRecord::Base
  attr_accessible :chat_message, :username, :user_id

  has_many :users


end
