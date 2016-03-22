class AddGraffitiIdToWall < ActiveRecord::Migration
  def change
    add_reference :graffitis, :wall, index: true, foreign_key: true
  end
end
