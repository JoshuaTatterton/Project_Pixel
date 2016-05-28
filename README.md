# Project Pixel (Working Title)

## Main Idea

An app to have a graffiti wall which people can draw on with pixel art.

I would like to be able to port this to a phone app at some point.

#### Current Version

The current version has one graffiti wall where people can either create a new graffiti or edit existing graffiti that appears on the wall. 

The graffiti is drawn on a grid from a small pallet of colours.

[The website can be found here.](https://powerful-caverns-70125.herokuapp.com).

#### Future Features

- The CSS will be redone at some point and apply responsive design as well as ITCSS methodology.
- A system will be put in place to stop more than one person from trying to edit a graffiti at once, at the moment there are no barriers in place. 
- A change up of the wall size and graffiti size (odd numbers are better)
- A User management system will be implemented allow users to obtain certain perks for playing. i.e improved colour pallet, ability to block people from changing their graffiti.
- The addition of more than just the one wall for people to draw on.

#### To Test

- The feature tests can be run by running rspec in the command line.
- To run the karma tests for angular can be run using the command npm test.

#### Technologies Used

- Production: Ruby on Rails, Heroku, HTML, CSS, JavaScript, Angular.js
- Testing: Rspec, Capybara, Karma

#### To Deploy

To deploy with Heroku the following code needs to be run from the command line to allow Heroku to compile all assets in tandem with bower. 
``` 
heroku config:set BUILDPACK_URL='git://github.com/qnyp/heroku-buildpack-ruby-bower.git#run-bower'
```