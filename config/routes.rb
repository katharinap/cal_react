Rails.application.routes.draw do
  root 'appointments#index'
  resources :appointments

  get '/playground', to: 'playground#index'
end
