Template.map.onRendered(function () {
	// $(window).scroll(function () {
	// 	var t = $('body').scrollTop();
	// 	if (t>=600) {
	// 		$('#topfade').fadeOut("slow");
	// 	} else {
	// 		$('#topfade').fadeIn("slow");
	// 	}
	// });
})

Template.map.events({
	// 'click .tabs li': function (e) {
	// 	//四个标签切换
	// 	var target = e.target ;
	// 	var index = $(" .tabs li").index(target);
	// 	var changeNode = $(".nav .changed");
	// 	changeNode.html (target.innerHTML);
	// 	$(target).addClass('active').siblings().removeClass('active');
	// 	$('.main-box .box').eq(index).addClass('show').siblings().removeClass('show');
	// },
	'click .transport li': function (e) {
		//四个标签切换
		var target = e.target ;
		console.log(target)
		var index = $(" .transport li").index(target);
		$(target).addClass('map-active').siblings().removeClass('map-active');
		$('.map-info div').eq(index).addClass('show').siblings().removeClass('show');
	},
	'click .item': function (e) {
		var target = $(e.currentTarget),
			val = target.attr('val'),
			selfRoute = $('.self-route');
		var selfDiv = $('.self-route div');
		selfRoute.css('cssText','background:url(/images/contactus/selfdrive/'+val+'.jpg) no-repeat');
		$('.all-routes').find('.item').removeClass('bggray');
		target.addClass('bggray');
		for (var i = 0; i <6; i++) {
			if ($(selfDiv[i]).attr('val') == val) {
				$(selfDiv[i]).css('display','none').siblings().css('display','block');
			}
		}
		
	},
	'click .self-route div': function (e) {
		var target = $(e.currentTarget),
			val = target.attr('val'),
			selfRoute = $('.self-route');
		var item = $('.item');
		selfRoute.css('cssText','background:url(/images/contactus/selfdrive/'+val+'.jpg) no-repeat');
		target.css('display','none').siblings().css('display','block');
		for (var i = 0; i <6; i++) {
			if ($(item[i]).attr('val') == val) {
				$('.all-routes').find('.item').removeClass('bggray');
				$(item[i]).addClass('bggray').siblings().removeClass('bggray');
			}
		}
	}
});
