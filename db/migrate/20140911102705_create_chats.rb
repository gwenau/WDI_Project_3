class CreateChats < ActiveRecord::Migration
  def change
    create_table :chats do |t|
      t.string :username
      t.text :chat_message

      t.timestamps
    end
  end
end
