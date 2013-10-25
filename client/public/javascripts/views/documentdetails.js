define(['backbone', 'handlebars'], function(Backbone, Handlebars) {
  return Backbone.View.extend({
    className: 'document-details',

    render: function() {
      var template = $('#documentdetailstemplate').html();
      var compiled = Handlebars.compile(template);
      var html = compiled(this.model.attributes);
      this.$el.html(html);
      return this;
    }
  });
});
