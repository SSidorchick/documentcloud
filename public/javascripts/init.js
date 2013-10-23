$(function() {
  var collection = new DocumentCollection();
  collection.fetch({
    success: function(data) {
      var view = new DocumentCollectionView({ collection: data });
      $("body").append(view.render().el);
    }
  });
});
