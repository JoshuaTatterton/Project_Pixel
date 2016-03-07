require "rails_helper"

describe Graffiti, type: :model do

  it { should validate_presence_of(:drawing) }

end