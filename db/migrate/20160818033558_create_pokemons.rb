class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.string :name
      t.text :information
      t.string :image_url
      t.integer :combat_power

      t.timestamps null: false
    end
  end
end
