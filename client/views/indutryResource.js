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
});
Template.plant.events({
	'click .ul-text ul li': function (event) {
		// ...
		var target = event.target;
		$(target).find('input').click();
		$(target).toggleClass('normal-red');
	}
});

Template.plant.helpers({
	plants: [
		{
			name: '大叶公路8828号',
			s1: '45亩',
			s2: '30000平方米',
			kind: '物流·重工',
			price: '0.6',
			url: '/indutryResource/plantDetail1'
		},
		{
			name: '奉高路858号',
			s1: '10亩',
			s2: '5000平方米',
			kind: '电子原配件',
			price: '0.6',
			url: '/indutryResource/plantDetail2'
		},
		{
			name: '大叶公路7946号',
			s1: '2000平方米',
			s2: '2000平方米',
			kind: '物流·重工',
			price: '0.6',
			url: '/indutryResource/plantDetail3'
		},
		{
			name: '兰博路136号',
			s1: '20亩',
			s2: '12000平方米',
			kind: '大规模工业',
			price: '0.7',
			url: '/indutryResource/plantDetail4'
		},
		{
			name: '兰博路136号',
			s1: '20亩',
			s2: '12000平方米',
			kind: '大规模工业',
			price: '0.7',
			url: '/indutryResource/plantDetail4'
		}
	]
});

Template.mapTitle.events({
	'click .tabs': function (event) {
		// ...
		// event.preventDefault();
		// var target = event.currentTarget;
		// $(target).first().toggleClass('button-change').siblings().removeClass('button-change');
	}
});
