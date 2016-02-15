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
      expect(page).to have_css("div.grid")
    end
    scenario "the wall has a 16 x 7 grid containing pixels", js: true do
      visit "/graffiti"
      within("ul.vertical") do
        for i in 1..7
          within("li.vertical##{i}") do
            within("ul.horizontal") do
              for i in 1..16
                within("li.horizontal##{i}") do
                  expect(page).to have_css("div.pixel")
                end
              end
            end
          end
        end
      end
    end
  end

end