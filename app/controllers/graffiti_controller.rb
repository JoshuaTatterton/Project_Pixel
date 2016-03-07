class GraffitiController < ApplicationController
  
  def index
  end

  def new
    @graffiti = Graffiti.create
  end

end
