class AddGridToWall < ActiveRecord::Migration
  def change
    add_column :walls, :grid, :integer, array:true, default: Array.new(21) { Array.new(21) { false } }
  end
end
