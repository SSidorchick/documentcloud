define(['backbone', 'handlebars', 'jquery'],
function(Backbone, Handlebars, $) {
  return Backbone.View.extend({
    className: 'col-sm-6 document',

    render: function() {
      var template = $('#documenttemplate').html();
      var compiled = Handlebars.compile(template);
      var html = compiled(this.model.attributes);
      this.$el.html(html);
      return this;
    }
  });
});
