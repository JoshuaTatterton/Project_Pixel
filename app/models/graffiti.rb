class Graffiti < ActiveRecord::Base

  validates :drawing, presence: true

end
