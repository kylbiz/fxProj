Template.mapTitle.events({
	'click .map-title a': function (event) {
		// ...
		// Session.set('resouseType', $(event.currentTarget).attr("value"));
		// Blaze.render(Template.plante);
	}
});

Template.land.onRendered(function () {
	$('#land').addClass('button-change');
	$('.ul-text ul li:nth-child(2)').addClass('normal-red');
	$('.ul-text ul li:nth-child(2)').find('input').attr('checked','checked');
})
Template.land.events({
	'click .ul-text ul li': function (event) {
		// ...
		var target = event.target;
		$(target).find('input').click();
		$(target).toggleClass('normal-red');
	}
});

Template.building.onRendered(function () {
	$('#building').addClass('button-change');
	$('.ul-text ul li:nth-child(2)').addClass('normal-red');
	$('.ul-text ul li:nth-child(2)').find('input').attr('checked','checked');
})
Template.building.events({
	'click .ul-text ul li': function (event) {
		// ...
		var target = event.target;
		$(target).find('input').click();
		$(target).toggleClass('normal-red');
	}
});


Template.plant.onRendered(function () {
	$('#plant').addClass('button-change');
	$('.ul-text ul li:nth-child(2)').addClass('normal-red');
	$('.ul-text ul li:nth-child(2)').find('input').attr('checked','checked');
})
Template.plant.events({
	'click .ul-text ul li': function (event) {
		// ...
		var target = event.target;
		$(target).find('input').click();
		$(target).toggleClass('normal-red');
	}
});

Template.mapTitle.events({
	'click .tabs': function (event) {
		// ...
		// event.preventDefault();
		// var target = event.currentTarget;
		// $(target).first().toggleClass('button-change').siblings().removeClass('button-change');
	}
});