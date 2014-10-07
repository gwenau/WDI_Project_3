class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :event_id
      t.text :comment
      t.integer :like_count

      t.timestamps
    end
  end
end
