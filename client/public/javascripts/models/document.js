/*
 * Document model. Overrides id attribute key to match from service.
 */
define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    idAttribute: 'AttachmentId'
  });
});
