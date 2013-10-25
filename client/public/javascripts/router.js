define(['backbone', 'events', 'collections/document', 'views/documentcollection',
'views/documentdetails'],
function(Backbone, Events, DocumentCollection, DocumentCollectionView,
DocumentDetailsView) {
  return Backbone.Router.extend({
    routes: {
      '': 'index',
      'documents/:id': 'showDocumentDetails'
    },

    initialize: function() {
      this.collection = new DocumentCollection();

      Events.on('router:navigate', function(url) {
        this.navigate(url, { trigger: true });
      }.bind(this));
    },

    index: function() {
      this.collection.fetch({
        success: function(data) {
          var view = new DocumentCollectionView({ collection: data });
          this._renderView(view);
        }.bind(this)
      });
    },

    showDocumentDetails: function(id) {
      var document = this.collection.get(id);
      var view = new DocumentDetailsView({ model: document });
      this._renderView(view);
    },

    _renderView: function(view) {
      $('.app').html(view.render().el);
    }
  });
});
