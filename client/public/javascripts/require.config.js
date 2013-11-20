/*
 * Require js config for loading dependencies.
 */
require.config({
  baseUrl: 'public/javascripts',

  paths: {
    jquery: '../../bower_components/jquery/jquery',
    backbone: '../../bower_components/backbone/backbone',
    underscore: '../../bower_components/underscore/underscore',
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
