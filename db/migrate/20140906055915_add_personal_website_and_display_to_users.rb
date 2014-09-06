class AddPersonalWebsiteAndDisplayToUsers < ActiveRecord::Migration
  def change
    add_column :users, :personal_website, :string
    add_column :users, :display, :string
  end
end
