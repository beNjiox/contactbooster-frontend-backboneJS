[Contactbooster](#what-is-contactbooster) app using BackboneJS.
[See demo](http://www.google.com).
* CoffeeScript / RequireJS
* LocalStorage and ContactboosterAPI compliant as storage
* Mocha as testing
* Gulp as building tool


### requierement
The app use gulp, mocha and bower so make sure those are installed.
```
$> npm install -g bower
$> npm install -g mocha
$> npm install -g gulp
```

### development mode
```
$> git clone http://github.com/beNjiox/contactbooster-frontend-backboneJS.git
$> cd contactbooster-frontend-backboneJS
$> npm install && bower install
$> gulp
$> open http://localhost:8080/
```

### prod mode
```
$> gulp prod
$> cd dist
$> python -m SimpleHTTPServer
$> open http://localhost:8000
```

### test
*gulp default should be running in order to run the test,  then just type*
```
gulp test
```

### What is contactbooster?

Contactbooster is a little contactApp that is created using different framework/libraries for both backend and frontend.

See it as a TodoMVC type of project, that also includes different backend solutions.

**Clients available**: Backbone (AngularJS, Ember incoming)

**Backend available**: Laravel4, RoR, SailsJS incoming
