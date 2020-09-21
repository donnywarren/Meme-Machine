class Meme < ApplicationRecord
  belongs_to :user
  belongs_to :text
  belongs_to :image

end
