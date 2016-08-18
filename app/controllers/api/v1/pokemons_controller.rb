module Api
  module V1
    class PokemonsController < ApplicationController
      before_action :find_pokemon, only: [:update, :destroy]

      def index
        render json: Pokemon.all, root: :pokemon, status: :ok
      end

      def create
        @pokemon = Pokemon.create pokemon_params
        render json: @pokemon, root: :pokemon, status: :ok
      end

      def destroy
        render json: @pokemon.destroy, root: :pokemon, status: :ok
      end

      def update
        @pokemon.update_attributes pokemon_params
        render json: @pokemon, root: :pokemon, status: :ok
      end

      private

      def find_pokemon
        @pokemon = Pokemon.find(params[:id])
      end

      def pokemon_params
        params.require(:pokemon).permit(
          :name,
          :information,
          :image_url
        )
      end
    end
  end
end
