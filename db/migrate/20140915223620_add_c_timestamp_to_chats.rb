class AddCTimestampToChats < ActiveRecord::Migration
  def change
    add_column :chats, :c_timestamp, :timestamp
  end
end
