/*
 * Creates Marionette application, initializes routers and starts Backbone history.
 */
define(['backbone', 'routers/document'], function(Backbone, DocumentRouter) {
  var App = new Backbone.Marionette.Application();

  App.addInitializer(function() {
    new DocumentRouter();
    Backbone.history.start();
  });

  return App;
});
