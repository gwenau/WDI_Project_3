class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,  :confirmable, :timeoutable, :omniauthable, :omniauth_providers => [:google_oauth2], :confirm_within => 10.minute

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :group_id, :name, :image, :dob, :mobile, :role, :cancan_role, :github, :linkedin, :facebook, :twitter, :address_line_1, :address_line_2, :city, :postcode, :provider, :uid, :personal_website, :display
  # attr_accessible :title, :body

  # mount_uploader :image, UserImageUploader

  belongs_to :group
  has_many :messages
  has_and_belongs_to_many :events, :join_table => "events_users"


  def self.find_for_google_oauth2(auth, signed_in_user=nil)
    if user = signed_in_user || User.find_by_email(auth.info.email)
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name if user.name.blank?
      user.image = auth.info.image if user.image.blank?
      user.save
      user
    else
      where(auth.slice(:provider, :uid)).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.name = auth.info.name
        user.email = auth.info.email
        user.image = auth.info.image
        user.password = Devise.friendly_token[0,20]
        user.skip_confirmation! # don't require email confirmation
      end
    end
  end
end
