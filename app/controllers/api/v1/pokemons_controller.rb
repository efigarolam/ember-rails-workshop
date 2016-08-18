module Api
  module V1
    class PokemonsController < ApplicationController
      def create
        @pokemon = Pokemon.create pokemon_params

        render json: @pokemon, root: :pokemon, status: :ok
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
