define(['backbone', 'models/document'], function(Backbone, Document) {
  return Backbone.Collection.extend({
    model: Document,
    url: 'http://localhost:3001/documents'
  });
});
