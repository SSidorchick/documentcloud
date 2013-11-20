/*
 * Document details view.
 */
define(['backbone', 'handlebars', 'jquery', 'hbs!templates/documentdetails'],
function(Backbone, Handlebars, $, template) {
  return Backbone.View.extend({
    className: 'document-details',

    render: function() {
      var html = template(this.model.attributes);
      this.$el.html(html);
      return this;
    }
  });
});
