/*
 * Require js config for loading dependencies.
 */
require.config({
  baseUrl: 'public/javascripts',

  paths: {
    jquery: '../../bower_components/jquery/jquery',
    backbone: '../../bower_components/backbone/backbone',
    underscore: '../../bower_components/underscore/underscore',
    handlebars: '../../bower_components/handlebars/handlebars.amd'
  },

  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  }
});

require(['init']);
