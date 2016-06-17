Template.distribution.onRendered(function () {
	$('#industrialD').removeClass('hide');
	$('#east').addClass('active');
})

Template.distribution.events({
	'click .important li': function (event) {
		// ...
		var target = event.target;
		if ($(target).index() != 0) {
			$(target).addClass('active').siblings().removeClass('active');
		}
	},
	'click .distribute li': function (event) {
		// ...
		var target = event.target;
		if ($(target).index() != 0) {
			$(target).addClass('active').siblings().removeClass('active');
		}
	},
	'click #east': function (event) {
		$('#industrialD').removeClass('hide');
		$('#importantContent').addClass('hide');
	},
	'click #importantIndus': function (event) {
		$('#importantContent').removeClass('hide');
		$('#industrialD').addClass('hide');
		$('.distribute li').removeClass('active');
	}
});