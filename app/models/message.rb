class Message < ActiveRecord::Base
  attr_accessible :context, :event_id, :user_id
end
