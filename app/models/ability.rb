class Ability
  include CanCan::Ability

  # I need help with syntax here.
  def initialize(user)
    user ||= User.new # Guest account if the user does not have an account.

    if user.role? :admin
      can :manage, :all
      can :create, User
    elsif user.role? :member
      can :read, :all
      can :create, User
      can :update, User do |user_ability|
        user_ability.id == user.id
      end
      can :create, Event
      can :update, Event do |event|
            event.user_id == user.id 
            end
      # This seems to be working as well.
      can :delete, Event do |event|
            event.try(:user) == user
            end
      can :create, Group
      can :update, Group do |group| 
            group.user == user
          end
      can :delete, Group do |group| 
            group.user.id = user.id
          end
    else 
      can :read, :all
      can :update, User do |user_ability|
        user_ability.id == user.id
      end
    end
  end
end