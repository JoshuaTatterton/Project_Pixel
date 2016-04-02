describe Graffiti, type: :model do

  it { should validate_presence_of(:drawing) }
  it { is_expected.to belong_to :wall }
  
end