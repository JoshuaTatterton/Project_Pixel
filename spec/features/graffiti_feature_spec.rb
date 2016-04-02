require "json"

feature "graffiti" do

  before(:each) { Wall.create }
  
  context "can be" do
    scenario "created" do
      graffiti = Graffiti.create(drawing: drawing)

      expect(graffiti.errors.full_messages.to_sentence).to eq ""
    end

    scenario "saved to database" do
      Graffiti.create(drawing: drawing)

      expect(Graffiti.all.count).to eq 1
    end
  end

  context "on the show page" do
    before(:each) do
      visit "/"
      click_link "new_graffiti"
    end

    scenario "the json is displayed" do
      graffiti = Graffiti.last
      visit "/graffiti/#{graffiti.id}"

      expect(page).to have_content json
    end
  end

  context "when drawing graffiti" do
    before(:each) do
      visit "/"
      click_link "new_graffiti"
    end

    scenario "there is a wall to draw on", js: true do
      expect(page).to have_css("div.grid")
    end

    scenario "the wall has a 28 x 14 grid containing pixels", js: true do
      for j in 1..14
        for i in 1..28
          expect(page).to have_button("#{i}x#{j}")
        end
      end
    end

    scenario "the pixels are defaulted to a certain colour", js: true do
      for j in 1..14
        for i in 1..28
          expect(page.find_by_id("#{i}x#{j}").native.css_value("background-color")).to eq("rgba(192, 192, 192, 1)")
        end
      end
    end

    scenario "clicking a pixel can change its colour", js: true do
      click_button "2x3"
      expect(page.find_by_id("2x3").native.css_value("background-color")).to eq("rgba(0, 0, 0, 1)")
    end

    scenario "the grid can be turned off", js: true do
      click_button "gridswitch"
      for j in 1..14
        for i in 1..28
          expect(page.find_by_id("#{i}x#{j}").native.css_value("border-color")).to eq("rgb(192, 192, 192)")
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

          scenario "after opening and closing", js: true do
            click_button "changecolour"
            click_button "changecolour"

            expect(page).not_to have_css("div.colourpallet")
          end

          scenario "after selecting a colour", js: true do
            for i in 1..16
              click_button "changecolour"
              click_button pallet[i-1]

              expect(page).not_to have_css("div.colourpallet")
            end
          end
        end
      end

      scenario "the colour that you draw with can be changed", js: true do
        for i in 1..16
          click_button "changecolour"
          click_button pallet[i-1]
          click_button "10x7"

          expect(page.find_by_id("10x7").native.css_value("background-color")).to eq(pallet[i-1])
        end
      end
    end

    # xscenario "colours can be drawn by dragging from one point", js: true do
    #   page.find_by_id("2x2").drag_to(page.find_by_id("2x9"))
    #   for j in 2..9
    #     expect(page.find_by_id("2x#{j}").native.css_value("background-color")).to eq("rgba(0, 0, 0, 1)")
    #   end
    # end

    scenario "you can choose to rub something out to the default colour", js: true do
      click_button "2x2"
      click_button "rubber"
      click_button "2x2"

      expect(page.find_by_id("2x2").native.css_value("background-color")).to eq("rgba(192, 192, 192, 1)")
    end

    context "graffiti is saved" do
      before(:each) do
        visit "/"
        click_link "new_graffiti"
      end

      scenario "when you click the done button", js: true do 
        i = 4
        j = 7
        old_drawing = Graffiti.last.drawing
        click_button "#{i}x#{j}"
        click_button "Done"
        graffiti = Graffiti.last

        expect(graffiti.drawing).not_to eq old_drawing
      end

      scenario "after clicking done you go back to '/'", js: true do
        click_button "Done"

        expect(current_path).to eq "/"
      end

      scenario "when you click draw", js: true do
        i = 12
        j = 8
        old_drawing = Graffiti.last.drawing
        click_button "#{i}x#{j}"
        graffiti = Graffiti.last

        expect(graffiti.drawing).not_to eq old_drawing
      end
    end
  end

  let(:pallet) {
    ["rgba(255, 0, 0, 1)", "rgba(255, 125, 0, 1)", "rgba(255, 255, 0, 1)", "rgba(255, 255, 255, 1)",
    "rgba(0, 255, 125, 1)", "rgba(0, 255, 0, 1)", "rgba(125, 255, 0, 1)", "rgba(170, 170, 170, 1)", 
    "rgba(0, 255, 255, 1)", "rgba(0, 125, 255, 1)", "rgba(0, 0, 255, 1)", "rgba(85, 85, 85, 1)",
    "rgba(255, 0, 125, 1)", "rgba(255, 0, 255, 1)", "rgba(125, 0, 255, 1)", "rgba(0, 0, 0, 1)"]
  }
  let(:drawing) { double :drawing }
  let(:json) do
    '{ 
      "rows":[
        {"no":1, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":2, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":3, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":4, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":5, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":6, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":7, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},      
        {"no":8, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":9, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":10, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":11, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":12, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":13, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]},
        {"no":14, "columns":[{"no": 1, "colour": "rgba(192,192,192,1)"}, {"no": 2, "colour": "rgba(192,192,192,1)"},{"no": 3, "colour": "rgba(192,192,192,1)"},{"no": 4, "colour": "rgba(192,192,192,1)"},{"no": 5, "colour": "rgba(192,192,192,1)"},{"no": 6, "colour": "rgba(192,192,192,1)"},{"no": 7, "colour": "rgba(192,192,192,1)"},{"no": 8, "colour": "rgba(192,192,192,1)"},{"no": 9, "colour": "rgba(192,192,192,1)"},{"no": 10, "colour": "rgba(192,192,192,1)"},{"no": 11, "colour": "rgba(192,192,192,1)"},{"no": 12, "colour": "rgba(192,192,192,1)"},{"no": 13, "colour": "rgba(192,192,192,1)"},{"no": 14, "colour": "rgba(192,192,192,1)"},{"no": 15, "colour": "rgba(192,192,192,1)"},{"no": 16, "colour": "rgba(192,192,192,1)"},{"no": 17, "colour": "rgba(192,192,192,1)"}, {"no": 18, "colour": "rgba(192,192,192,1)"},{"no": 19, "colour": "rgba(192,192,192,1)"},{"no": 20, "colour": "rgba(192,192,192,1)"},{"no": 21, "colour": "rgba(192,192,192,1)"},{"no": 22, "colour": "rgba(192,192,192,1)"},{"no": 23, "colour": "rgba(192,192,192,1)"},{"no": 24, "colour": "rgba(192,192,192,1)"},{"no": 25, "colour": "rgba(192,192,192,1)"},{"no": 26, "colour": "rgba(192,192,192,1)"},{"no": 27, "colour": "rgba(192,192,192,1)"},{"no": 28, "colour": "rgba(192,192,192,1)"}]}
      ]
    }'
  end
end
