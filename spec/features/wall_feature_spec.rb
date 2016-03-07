require "rails_helper"

feature "wall" do
  scenario "new graffiti can be created from the wall" do
    visit "/"
    expect { click_link "new_graffiti" }.to change(Graffiti, :count).by(1)
  end
end