# Project Pixel (Working Title)

## Main Idea
An app to have a graffiti wall which people can draw on with pixel art.

I would like to be able to port this to a phone app at some point.

#### Current Version

The current version is basic and allows you to paint onto the background with various colours. [The website can be found here](https://powerful-caverns-70125.herokuapp.com).

#### To Test

- The feature tests can be run by running rspec in the command line.
- to run the karma tests for angular can be run using the command npm test.

#### Technologies Used

- Production: Ruby on Rails, Heroku, HTML, CSS, JavaScript, Angular.js
- Testing: Rspec, Capybara, Karma

#### To Deploy

To deploy with Heroku the following code needs to be run from the command line to allow Heroku to compile all assets in tandem with bower. 
``` 
heroku config:set BUILDPACK_URL='git://github.com/qnyp/heroku-buildpack-ruby-bower.git#run-bower'
```