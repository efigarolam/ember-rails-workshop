class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :information, :image_url, :combat_power, :created_at
end
