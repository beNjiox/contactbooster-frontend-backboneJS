[Contactbooster](#what-is-contactbooster) app using BackboneJS.
[See demo](http://contactbooster-backbone.bguez.io).
* CoffeeScript / RequireJS.
* LocalStorage and ContactboosterAPI compliant as storage.
* Mocha as testing, Gulp as building tool, bower as frontend dependencies management.

### requierements
The app use gulp, mocha and bower so make sure those are installed.
```
$> npm install -g bower
$> npm install -g mocha
$> npm install -g gulp

$> git clone http://github.com/beNjiox/contactbooster-frontend-backboneJS.git
$> cd contactbooster-frontend-backboneJS
$> npm install && bower install
```

### development mode
```
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

Contactbooster is a little web app to manage contact lists.
My goal was to release the app using different testing,frontend and backend framework/librairies.

**Clients available**: Backbone (AngularJS, Ember incoming)

**Backend available**: Laravel4, RoR, SailsJS incoming
