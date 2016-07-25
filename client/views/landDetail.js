Template.landDetail.events({
	'mouseover ul li': function (e) {
		// ...
		var now = e.currentTarget;
		$(now).find("div").show();
	},
	'mouseout ul li': function (e) {
		// ...
		var event = e || window.e;
		var now = event.currentTarget;
		$(now).find("div").hide();
	}
});