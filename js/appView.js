"use strict";

var $ = require("jquery"),
	Backbone = require("backbone"),
	template = require("../templates/appView.hbs");

module.exports = Backbone.View.extend({

	el: $("#app-section"),

	initialize: function() {
		this.registerEvents();
	},

	registerEvents: function() {
		Backbone.vent.on("app:initialized", this.render, this);
	},

	render: function() {
		this.$el.html(template(this.collection.toJSON()));
	}

});