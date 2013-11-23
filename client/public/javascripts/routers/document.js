/*
 * Document Router manages routing logic for document views.
 */
define(['backbone', 'app', 'controllers/document'], function(Backbone, App, Controller) {
  return Backbone.Marionette.AppRouter.extend({
    controller: new Controller(),
    appRoutes: {
      '': 'index',
      'documents': 'index',
      'documents/:id': 'showDocumentDetails'
    },

    initialize: function() {
      // Setting router reference enable navigation mechanism in contrller.
      this.controller.router = this;
    }
  });
});
