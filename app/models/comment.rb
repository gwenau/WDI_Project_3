class Comment < ActiveRecord::Base
  attr_accessible :comment, :event_id, :like_count, :user_id

  belongs_to  :event
  belongs_to  :user
end
