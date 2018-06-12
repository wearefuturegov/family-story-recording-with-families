Rails.application.routes.draw do
  get 'family/meeting'
  get 'family/meeting_details'
  get 'family/details'

  get 'home/index'

  root 'home#index'
end
