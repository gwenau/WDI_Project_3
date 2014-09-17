class AddLatLongToEvents < ActiveRecord::Migration
  def change
    add_column :events, :lat_long, :string
  end
end
