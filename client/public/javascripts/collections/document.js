/*
 * Document collection. Contains url to fetch json to create Document model.
 */
define(['backbone', 'models/document'], function(Backbone, Document) {
  return Backbone.Collection.extend({
    model: Document,
    url: 'http://localhost:3001/documents'
  });
});
