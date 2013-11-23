/*
 * Creates Marionette application, initializes Router and starts Backbone history.
 */
define(['backbone', 'router'], function(Backbone, Router) {
  var App = new Backbone.Marionette.Application();

  App.addInitializer(function() {
    new Router();
    Backbone.history.start();
  });

  return App;
});
