class CreateUserAdress < ActiveRecord::Migration[5.1]
  def change
    create_table :user_adresses do |t|
      t.integer :user_id
      t.integer :adress_id

      t.string :street_name
    end
  end
end
