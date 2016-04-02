describe Wall, type: :model do

  it { is_expected.to have_many :graffitis }

  it "has a empty grid set up by default" do
    expect(subject.grid).to eq Array.new(21) { Array.new(21) { 0 } }
  end

end