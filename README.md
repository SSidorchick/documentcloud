# Express.js + Backbone.js demo project

This project demonstrates how a simple application can be created with JavaScript thechnologies. It works as a simple SPA. The main page contains a hardcoded grid of documents. Clicking on a document application navigates to document details page.

The application is splited into client part to serve html pages and service part to provide data api.


## Used technologies

* Express.js
* Backbone.js
* RequireJs
* Handlebars


## Installation

Clone github repository

	$ git clone git@github.com:SSidorchick/express-backbone-demo.git

### Service	

Move to service folder
		
Install npm dependencies

	$ npm install
	
Run app

	$ node app.js

### Client

Move to client folder

Install npm dependencies

	$ npm install
	
Install bower dependencies

	$ bower install
	
Run app

	$ node app.js


## TODO

* ~~Create controller for Document model and move the views creation from Router to it~~
* ~~Splite Handlebars templates in parts for each Backbone view respectively~~
* ~~Remove Backbone Events usage and introduce event object that can be used by view to trigger events and controller to add handlers on this event~~
* Add RequireJs code compilation for production environment
* ~~Add package management for JavaScript libraries such as Backbone, Handlebars, etc~~ 