Template.contactUs.events({
	'click .tabs li': function (e) {
		//四个标签切换
		var target = e.target ;
		var index = $(" .tabs li").index(target);
		var changeNode = $(".nav .changed");
		changeNode.html (target.innerHTML);
		$(target).addClass('active').siblings().removeClass('active');
		$('.main-box .box').eq(index).addClass('show').siblings().removeClass('show');
	},

	'click .transport li': function (e) {
		//四个标签切换
		var target = e.target ;
		console.log(target)
		var index = $(" .transport li").index(target);
		$(target).addClass('map-active').siblings().removeClass('map-active');
		$('.map-info div').eq(index).addClass('show').siblings().removeClass('show');
	}	

});