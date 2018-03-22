class UserAdressArticles < ApplicationRecord
  belongs_to :user
  belongs_to :adress
  belongs_to :articles
end