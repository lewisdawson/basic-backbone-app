"use strict";

var Backbone = require("backbone"),
	PersonModel = require("./personModel");

module.exports = Backbone.Collection.extend({

	model: PersonModel

});