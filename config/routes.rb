Rails.application.routes.draw do
  get 'family/visit'
  get 'family/visit_save'
  get 'family/visit_details'
  get 'family/details'

  get 'home/index'

  root 'home#index'
end
