/*
 * Router manages routing logic.
 */
define(['backbone', 'collections/document',
        'views/documentcollection', 'views/documentdetails'],
function(Backbone, DocumentCollection,
         DocumentCollectionView, DocumentDetailsView) {
  return Backbone.Router.extend({
    routes: {
      '': 'index',
      'documents/:id': 'showDocumentDetails'
    },

    initialize: function() {
      this.collection = new DocumentCollection();
    },

    index: function() {
      this.collection.fetch({
        success: function(data) {
          var view = new DocumentCollectionView({ collection: data });
          this.listenTo(view, 'click', this._documentClickHandler);
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
    },

    _documentClickHandler: function(e) {
      this.navigate(e.url, { trigger: true });
    }
  });
});
