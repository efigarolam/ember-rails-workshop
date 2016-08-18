class Pokemon < ActiveRecord::Base
  after_create :set_combat_power

  private

  def set_combat_power
    update_attribute :combat_power, rand(1..3500)
  end
end
