# first app of the Complete Ruby on Rails Developer Course

1. install:

> $ bundle install

2. migrate
> rails db:migrate

3. run server
> rails s -p 3030

4. run test
> rails t


#### Set admin to user
```
rails console

User.all
User.first.update :admin => true

or 

user = User.last or User.first or User.find_by(email: "emailofuser")
user.admin?
user.toggle!(:admin)
```

`rails verion 5`