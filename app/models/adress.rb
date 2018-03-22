class Adress < ApplicationRecord
  # has_many :user
  has_many :user_adress
  has_many :user, through: :user_adress
  validates :street_name, presence: true, length: { minimum: 2, maximum: 25 }
  validates_uniqueness_of :street_name  

  has_many :user_adress
  has_many :articles, through: :user_adress

end
