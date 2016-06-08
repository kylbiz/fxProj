Template.zdev.events({
	'click .map button': function (e) {

		var btn = e.target;

		var index = $(btn).attr('val');

		$('.area-list .item').eq(index-1).toggle('show');

		$('.town-list .item').hide();
	},
	'click .map span': function (e) {
		
		console.log(e.target);

		var btn = e.target;

		var index = $(btn).attr('val');

		$('.town-list .item').eq(index-1).toggle('show');

		$('.area-list .item').hide();
	},
	// 'click .map': function (e) {
		
	// 	console.log(e.target);

	// 	var btn = e.target;

	// 	console.log(btn);

	// 	var index = $(btn).attr('val');

	// 	$('.town-list .item').hide();

	// 	$('.area-list .item').hide();
	// }
	'click .town ul li': function (e) {
		

		var btn = e.target;

		var index = $('.town ul li').index(btn);

		$('.town-list .item').eq(index-1).toggle('show');


		$('.area-list .item').hide();
	},

	'click .town ul li': function (e) {
		
		var btn = e.target;

		var index = $('.town ul li').index(btn);


		$('.town-list .item').eq(index).toggle('show');


		$('.area-list .item').hide();
	},

	'click .devarea ul li': function (e) {
		
		var btn = e.target;

		var index = $('.devarea ul li').index(btn);

		$('.area-list .item').eq(index).show().siblings().hide();

		$('.town-list .item').hide();
	},
});