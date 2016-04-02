class GraffitiController < ApplicationController
  
  def index
  end

  def new
    wall = Wall.last
    graffiti = wall.graffitis.create(drawing: Graffiti.blank_graffiti)
    wall.grid[10][10] = graffiti.id
    wall.update(grid: wall.grid)

    redirect_to edit_graffiti_path(graffiti)
  end

  def show
    graffiti = Graffiti.find(params[:id])

    render json: show_json(graffiti)
  end

  def edit
    @graffiti = Graffiti.find(params[:id])
  end

  def update
    graffiti = Graffiti.find(params[:id])
    graffiti.update(graffiti_params)

    render json: show_json(graffiti)
  end

  private

  def graffiti_params
    params.require(:graffiti).permit(:drawing)
  end

  def show_json(graffiti)
    "#{graffiti.drawing}"
  end
  
end
