class AddDrawingToGraffiti < ActiveRecord::Migration
  def change
    add_column :graffitis, :drawing, :text
  end
end
