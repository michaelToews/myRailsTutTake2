FactoryGirl.define do
  factory :user do
    name                  "Michael Toews"
    email                 "michael@example.com"
    password              "testPass"
    password_confirmation "testPass"
  end
end