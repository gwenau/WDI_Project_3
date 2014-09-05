class AddCancanRoleToUsers < ActiveRecord::Migration
  def change
    add_column :users, :cancan_role, :string
  end
end
