class Event < ActiveRecord::Base
  attr_accessible :address_line_1, :address_line_2, :attendence_required, :attending, :city, :description, :event_date, :event_time, :name, :phone, :postcode, :scope, :venue

  has_and_belongs_to_many :users, :join_table => "events_users"
  has_many :messages
end
