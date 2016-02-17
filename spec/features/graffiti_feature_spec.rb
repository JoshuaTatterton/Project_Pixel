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
    before(:each) do
      visit "/graffiti"
    end
    scenario "there is a wall to draw on", js: true do
      expect(page).to have_css("div.grid")
    end
    scenario "the wall has a 16 x 7 grid containing pixels", js: true do
      for j in 1..7
        for i in 1..16
          expect(page).to have_button("#{i}#{j}")
        end
      end
    end
    scenario "the pixels are defaulted to a certain colour", js: true do
      for j in 1..7
        for i in 1..16
          expect(page.find_by_id("#{i}#{j}").native.css_value("background-color")).to eq("rgba(192, 192, 192, 1)")
        end
      end
    end
    scenario "clicking a pixel can change its colour", js: true do
      click_button "23"
      expect(page.find_by_id("23").native.css_value("background-color")).to eq("rgba(0, 0, 0, 1)")
    end
    scenario "the grid can be turned off", js: true do
      click_button "gridswitch"
      for j in 1..7
        for i in 1..16
          expect(page.find_by_id("#{i}#{j}").native.css_value("border-color")).to eq("rgb(192, 192, 192)")
        end
      end
    end
    context "drawing with a different colour" do
      context "the colour pallet" do
        scenario "can be opened", js: true do
          click_button "changecolour"
          expect(page).to have_css("div.colourpallet")
        end
        context "is not visible" do
          scenario "on page load", js: true do
            expect(page).not_to have_css("div.colourpallet")
          end
        end
      end
      xscenario "the colour that you draw with can be changed", js: true do
        click_button "changecolour"
        click_button "rgba(0, 255, 125, 1)"
        click_button "107"
        expect(page.find_by_id("107").native.css_value("background-color")).to eq("rgba(255, 0, 0, 1)")
      end
    end
  end

end