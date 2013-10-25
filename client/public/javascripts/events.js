/*
 * Events object shared between views and router.
 */
define(['underscore', 'backbone'], function(_, Backbone) {
  var o = {};
  _.extend(o, Backbone.Events);
  return o;
});
