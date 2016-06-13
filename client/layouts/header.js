Template.header.onRendered(function() {


	// $(document).ready(function() {
		
		$("li.nav1").each(function() {
			$(this).hover(
				function() {
					$(this).find("ul:eq(0)").show();
					$(this).find("p").css('color',"#11719c")
					if ($(this).attr("name") =='home') return ;
					$(".nav2-bg").show();
				},
				function() {
					$(this).find("ul:eq(0)").hide();
					$(this).find("p:first-child").css('color',"#666666");
					$(this).find("p.en").css('color',"#999999");
					$(".nav2-bg").hide();
				}
			)
		})
		
})


Template.header.events({
	'mouseover .qrcode': function () {
		$('.qr-code').show();
	},
	'mouseout .qrcode': function () {
		$('.qr-code').hide();
	},
	'click .good': function () {
		$('#helper').show()
		$('.choose-language ul').css('line-height','35px')
	},
	'click .nav .nav1': function(e) {
		// var li = e.target.parentNode.parentNode.parentNode;
		// var li2 = e.target.parents();
		var event = e || window.e;
		var li = event.currentTarget;
		console.log(li)
		$(li).addClass("navactive").siblings().removeClass("navactive");
		// $(li).find("a").css('color',"#11719c");
		// return false;
	},
	'click .nav1 ul li': function(e) {
		var event = e || window.e;
		var li = event.target.parentNode.parentNode.parentNode;
		$(li).addClass("navactive").siblings().removeClass("navactive");
	}
});	