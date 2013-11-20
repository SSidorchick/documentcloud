/*
 * Document view. Renders the view and handles click on document anchor.
 */
define(['backbone', 'handlebars', 'jquery', 'events'],
function(Backbone, Handlebars, $, Events) {
  return Backbone.View.extend({
    className: 'col-sm-6 document',

    events: {
      'click .file-name': '_documentClick'
    },

    render: function() {
      var template = $('#documenttemplate').html();
      var compiled = Handlebars.default.compile(template);
      var html = compiled(this.model.attributes);
      this.$el.html(html);
      return this;
    },

    _documentClick: function(e) {
      e.preventDefault();
      var id = this.model.get("AttachmentId");
      var url = 'documents/' + id;
      Events.trigger('router:navigate', url);
    }
  });
});
