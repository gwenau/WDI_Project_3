class Message < ActiveRecord::Base
  attr_accessible :context, :event_id, :user_id

  belongs_to :event
  belongs_to :user
end
