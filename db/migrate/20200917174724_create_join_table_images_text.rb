class CreateJoinTableImagesText < ActiveRecord::Migration[6.0]
  def change
    create_join_table :images, :texts do |t|
      # t.index [:image_id, :text_id]
      # t.index [:text_id, :image_id]
      t.references :user, null: false, foreign_key: true
    end
  end
end
