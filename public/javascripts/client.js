var Document = Backbone.Model.extend({
  idAttribure: "AttachmentId"
});

var DocumentCollection = Backbone.Collection.extend({
  model: Document,
  url: "/documents"
});

var DocumentView = Backbone.View.extend({
  tagName: "li",
  className: "document",
  render: function() {
    var template = $("#documenttemplate").html();
    var compiled = Handlebars.compile(template);
    var html = compiled(this.model.attributes);
    this.$el.html(html);
    return this;
  }
});

var DocumentCollectionView = Backbone.View.extend({
  tabName: "ul",
  className: "documents",
  render: function() {
    this.collection.each(function(document) {
      var documentView = new DocumentView({ model: document });
      this.$el.append(documentView.render().el);
    }, this);
    return this;
  }
});
