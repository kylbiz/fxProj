Template.mapTitle.events({
	'click .map-title a': function (event) {
		// ...
		// Session.set('resouseType', $(event.currentTarget).attr("value"));
		// Blaze.render(Template.plante);
	}
});

Template.land.onRendered(function () {
	$('#land').addClass('button-change');
})


Template.mapTitle.events({
	'click .tabs': function (event) {
		// ...
		// event.preventDefault();
		// var target = event.currentTarget;
		// $(target).first().toggleClass('button-change').siblings().removeClass('button-change');
	}
});

Template.building.onRendered(function () {
	$('#building').addClass('button-change');
})

Template.plant.onRendered(function () {
	$('#plant').addClass('button-change');
})