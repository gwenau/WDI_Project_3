class Chat < ActiveRecord::Base
  attr_accessible :chat_message, :username, :user_id, :c_timestamp

  has_many :users


end
