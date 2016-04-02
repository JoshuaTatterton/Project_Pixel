feature "wall" do
  before(:each) do
    @wall = Wall.create
    visit "/"
  end

  scenario "new graffiti can be created from the wall" do
    expect { click_link "new_graffiti" }.to change(Graffiti, :count).by(1)
  end

  scenario "there is a wall" do
    expect(page).to have_css("div.wall")
  end

  context "the wall" do
    scenario "has a space for the graffiti", js: true do
      expect(page).to have_button "1x1"
    end

    scenario "the wall displays the graffiti", js: true do
      click_link "new_graffiti"
      click_button "1x1"

      @wall.grid[0][0] = Graffiti.last.id
      Wall.last.update(grid: @wall.grid)
      
      visit "/"

      expect(page).to have_css(".wall_pixel")
    end
  end
end