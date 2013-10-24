define(['backbone', 'collections/document', 'views/documentcollection'],
function(Backbone, DocumentCollection, DocumentCollectionView) {
  return Backbone.Router.extend({
    routes: {
      '': 'index'
    },

    initialize: function() {
      this.collection = new DocumentCollection();
    },

    index: function() {
      this.collection.fetch({
        success: function(data) {
          var view = new DocumentCollectionView({ collection: data });
          $('.app').html(view.render().el);
        }
      });
    }
  });
});
