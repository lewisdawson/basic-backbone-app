"use strict";

var $ = require("jquery"),
	_ = require("underscore"),
	AppView = require("./js/AppView"),
	PersonModel = require("./js/personModel"),
	PersonCollection = require("./js/personCollection"),
	Backbone = require("backbone");

$(function() {

	Backbone.vent = _.extend({}, Backbone.Events);

	new AppView({
		collection: initializePersonCollection()
	});

	Backbone.vent.trigger("app:initialized");

	function initializePersonCollection() {
		var person1,
			person2;

		person1 = new PersonModel({
			firstName: "Homer",
			lastName: "Simpson",
			occupation: "Lazy Bum"
		});
		person2 = new PersonModel({
			firstName: "Marge",
			lastName: "Simpson",
			occupation: "Homemaker"
		});

		return new PersonCollection([person1, person2]);
	}

});