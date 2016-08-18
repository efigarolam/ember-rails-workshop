class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :information, :image_url, :combat_power, :created_at

  def created_at
    object.created_at.strftime("%m/%d/%Y")
  end
end
