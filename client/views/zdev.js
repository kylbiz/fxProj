Template.zdev.events({
	'click .map button': function (e) {

		var btn = e.target;

		var index = $(btn).attr('val');

		$(".imgs img").eq(index-1).show().siblings().hide();

		$('.area-list .item').eq(index-1).toggle('show').siblings().hide();

		$('.town-list .item').hide();

		$('.devarea ul .y1').eq(index-1).css('color','red').siblings().css('color','#11719c');
	},

	'click .map .ss': function (e) {

		var btn = e.target;

		var index = $(btn).attr('val');

		$(btn).css('color',"red").siblings("span").css('color','#11719c');

		$('.town ul li').eq(index-1).css('color','red').siblings().css('color','#11719c');

		$('.town-list .item').eq(index-1).toggle('show').siblings().hide();

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

		$(btn).css('color',"red").siblings().css('color',"#11719c");

		// console.log($(".spans span").eq(index));

		$(".spans span").eq(index).css('color',"red").siblings().css('color',"#11719c");

		$('.devarea ul li').css('color',"#11719c");

		$('.town-list .item').eq(index).toggle('show').siblings().hide();

		$('.area-list .item').hide();

		$(".imgs img").hide();
	},

	// 'click .town ul li': function (e) {

	// 	var btn = e.target;

	// 	var index = $('.town ul li').index(btn);


	// 	$('.town-list .item').eq(index).toggle('show').siblings().hide();


	// 	$('.area-list .item').hide();
	// },

	'click .devarea .y1': function (e) {

		var btn = e.target;

		var index = $('.devarea .y1').index(btn);

		console.log(index);

		$(btn).css('color',"red").siblings().css('color',"#11719c");
		$(btn).parent().siblings("").find("li").css('color',"#11719c");

		$(".spans span").css('color',"#11719c");

		$('.town ul li').css('color',"#11719c");

		// $(".imgs img").eq(index).show().siblings().hide();

		$('.area-list .item').eq(index).show().siblings().hide();

		$('.town-list .item').hide();
	},
	//
	// 'click .map': function() {
	// 	$('.town-list .item').hide();
	// 	$('.area-list .item').hide();
	// }
});
