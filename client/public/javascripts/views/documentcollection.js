/*
 * Document Collection view. Renders the Document views.
 */
define(['backbone', 'views/document'], function(Backbone, DocumentView) {
  return Backbone.View.extend({
    className: 'row documents',

    initialize: function() {
      this.listenTo(this.collection, 'reset', this.render);
    },

    render: function() {
      this.$el.html('');
      this.collection.each(function(document) {
        var documentView = new DocumentView({ model: document });
        this.listenTo(documentView, 'click', this._documentClickHandler);
        this.$el.append(documentView.render().el);
      }, this);
      return this;
    },

    _documentClickHandler: function(e) {
      this.trigger('click', e);
    }
  });
});
