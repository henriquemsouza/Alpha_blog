class UserAdress < ApplicationRecord
  belongs_to :user
  belongs_to :adress
end