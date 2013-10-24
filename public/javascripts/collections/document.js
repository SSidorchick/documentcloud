define(['backbone', 'models/document'], function(Backbone, Document) {
  return Backbone.Collection.extend({
    model: Document,
    url: '/documents'
  });
});
