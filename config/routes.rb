Rails.application.routes.draw do
  mount_ember_app :frontend, to: '/'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :pokemons, only: [:create, :index, :destroy]
    end
  end
end
