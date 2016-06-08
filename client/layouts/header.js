Template.header.onRendered(function() {


	// $(document).ready(function() {
		
		$("li.nav1").each(function() {
			$(this).hover(
				function() {
					$(this).find("ul:eq(0)").show();
					$(this).find("p").css('color',"#11719c")
					// $('#home').css('margin-top','40px');
					$(".nav2-bg").show();
					return false;
				},
				function() {
					$(this).find("ul:eq(0)").hide();
					$(this).find("p:first-child").css('color',"#666666");
					$(this).find("p.en").css('color',"#999999");
					$(".nav2-bg").hide();
					// $('#home').css('margin-top','0px');
					return false;
				}
			)
		})
		
	// });
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
		console.log(li);
		$(li).addClass("active").siblings().removeClass("active");
		$(li).find("p").css('color',"#11719c").siblings().find("p:first-child").css('color',"#666666").find("p.en").css('color',"#999999");
		// return false;
	},
	// 'mouseover .nav .nav1': function(e) {
	// 	// var li = e.target.parentNode.parentNode.parentNode;
	// 	// var li2 = e.target.parents();
	// 	var event = e || window.e;
	// 	var li = event.currentTarget;
	// 	console.log(li);
	// 	$(li).children("ul").show();
	// 	$(".nav2-bg").show();
	// },
	// 'mouseout .nav .nav1': function(e) {
	// 	// var li = e.target.parentNode.parentNode.parentNode;
	// 	// var li2 = e.target.parents();
	// 	var event = e || window.e;
	// 	var li = event.currentTarget;
	// 	console.log(li);
	// 	$(li).children("ul").hide();
	// 	$(".nav2-bg").hide();
	// }
});	