class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.date :event_date
      t.datetime :event_time
      t.string :scope
      t.string :attendence_required
      t.string :attending
      t.string :venue
      t.string :address_line_1
      t.string :address_line_2
      t.string :city
      t.string :postcode
      t.integer :phone

      t.timestamps
    end
  end
end
