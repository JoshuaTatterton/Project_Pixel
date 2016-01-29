class CreateGraffitis < ActiveRecord::Migration
  def change
    create_table :graffitis do |t|

      t.timestamps null: false
    end
  end
end
