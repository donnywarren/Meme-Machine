# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Meme.destroy_all
Image.destroy_all
Text.destroy_all
User.destroy_all

admin = User.create!(username: 'admin', email: 'admin@email.com', password: 'project4')

puts "#{User.count} users created."

cat = Image.create!(name: 'cat', img_url: 'https://images.unsplash.com/photo-1591165040261-01fcb54e90e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
dog_with_pizza = Image.create!(name: 'dog_with_pizza', img_url: 'https://images.unsplash.com/photo-1596276567596-8eb1b5994cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
incredulous_kid = Image.create!(name: 'incredulous_kid', img_url: 'https://images.unsplash.com/photo-1579099715183-a057711f3aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
angry_eye = Image.create!(name: 'angry_eye', img_url: 'https://images.unsplash.com/photo-1505274664176-44ccaa7969a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
surprise_guy = Image.create!(name: 'surprise_guy', img_url: 'https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
banana_guys = Image.create!(name: 'banana_guys', img_url: 'https://images.unsplash.com/photo-1590364962261-20baeb6262a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
dog = Image.create!(name: 'dog', img_url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')
old_time_girl = Image.create!(name: 'old_time_girl', img_url: 'https://images.unsplash.com/photo-1575397738805-3b79fcdaa571?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
scary_clown = Image.create!(name: 'scary_clown', img_url: 'https://images.unsplash.com/photo-1572453020814-972b244074d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
pensive_little_girl = Image.create!(name: "pensive_little_girl", img_url: 'https://images.unsplash.com/photo-1516794840430-8d8c51e7c045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')

puts "#{Image.count} images created."

good_boy = Text.create!(content: "Who's a good boy?")
fart = Text.create!(content: "That was not a fart")
not_rich = Text.create!(content: "Waking up and realizing you're still not rich...")
club = Text.create!(content: "The club can't even handle me right now.")
tuesday = Text.create!(content: "It's only Tuesday?")
wat = Text.create!(content: "WAT")
manager = Text.create!(content: "I'd like to speak to the manager!")

puts "#{Text.count} text created."
