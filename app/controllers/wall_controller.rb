class WallController < ApplicationController
 
  def index
    @wall = Wall.last
  end

  def show
    wall = Wall.find(params[:id])
    render json: assemble_wall(wall)
  end

  def assemble_wall(wall)
    rows = wall.grid.map.with_index do |j, x|
      columns = j.map.with_index do |i, x|
        { :no => x+1, :id => i }
      end
      { :no => x+1, :columns => columns }
    end
    wall = { :rows => rows }
  end

end
