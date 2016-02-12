require "rails_helper"

feature "graffiti" do

  context "can be" do
    scenario "created" do
      expect { Graffiti.create } .not_to raise_error
    end
    scenario "saved to database" do
      Graffiti.create
      expect(Graffiti.all.count).to eq 1
    end
  end

  context "when drawing graffiti" do
    scenario "there is a wall to draw on", js: true do
      visit "/graffiti"
      expect(page).to have_content("grid")
    end
  end
end