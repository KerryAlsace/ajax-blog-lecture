Rails.application.routes.draw do
  resources :posts do
    resources :comments # Nested Resource # /posts/1/comments
  end
   # Top Level /comments #=> We want comments for a particular post
end
