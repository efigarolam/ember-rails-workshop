module Api
  module V1
    class PokemonsController < ApplicationController
      def index
        render json: Pokemon.all, root: :pokemon, status: :ok
      end

      def create
        @pokemon = Pokemon.create pokemon_params
        render json: @pokemon, root: :pokemon, status: :ok
      end

      def destroy
        @pokemon = Pokemon.find(params[:id])
        render json: @pokemon.destroy, root: :pokemon, status: :ok
      end

      private

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
