/*
 * Require js config for loading dependencies.
 */
require.config({
  baseUrl: 'public/javascripts',

  deps: ['backbone.marionette', 'init'],

  paths: {
    jquery: '../../bower_components/jquery/jquery',
    backbone: '../../bower_components/backbone/backbone',
    underscore: '../../bower_components/underscore/underscore',

    'backbone.marionette': '../../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.wreqr': '../../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
    'backbone.babysitter': '../../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',

    handlebars: '../../bower_components/handlebars/handlebars',

		hbs: '../../bower_components/hbs/hbs',
		i18nprecompile : "../../bower_components/hbs/hbs/i18nprecompile",
		json2 : "../../bower_components/hbs/hbs/json2"
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
  },

	hbs : {
		disableI18n: true
	}
});

require(['init']);
