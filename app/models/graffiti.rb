class Graffiti < ActiveRecord::Base

  validates :drawing, presence: true

  belongs_to :wall
  
end
