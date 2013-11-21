/*
 * Document view. Renders the view and handles click on document anchor.
 */
define(['backbone', 'handlebars', 'jquery', 'hbs!templates/document'],
function(Backbone, Handlebars, $, template) {
  return Backbone.View.extend({
    className: 'col-sm-6 document',

    events: {
      'click .file-name': '_documentClick'
    },

    render: function() {
			var html = template(this.model.attributes);
      this.$el.html(html);
      return this;
    },

    _documentClick: function(e) {
      e.preventDefault();
      var id = this.model.get("AttachmentId");
      var url = 'documents/' + id;
      this.trigger('click', { target: this, url: url });
    }
  });
});
