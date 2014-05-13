(function() {
  require.config({
    paths: {
      'jQuery': '../bower_components/jquery/dist/jquery.min',
      'bootstrap': '//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min',
      'underscore': '../bower_components/underscore/underscore',
      'backbone': '../bower_components/backbone/backbone',
      'backbone.localStorage': '../bower_components/backbone.localStorage/backbone.localStorage-min'
    },
    shim: {
      'underscore': {
        exports: '_'
      },
      'backbone': {
        exports: 'Backbone'
      },
      'jQuery': {
        exports: '$'
      }
    }
  });

  require(['jQuery', 'underscore', 'backbone', 'app'], function($, _, Backbone, App) {
    return App.start();
  });

}).call(this);
