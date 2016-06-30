Template.fxAdvantages.onRendered(function () {
	   
})

Template.fxAdvantages.helpers({
	isClick: function () {
		// ...
		return Session.set('isClick', false);
	},
	isHover: function () {
		return Session.set('isHover', false);
	},
});

Template.fxAdvantages.events({
	'click .pictures div': function (e) {
		// ...
		// var attr = $('.pictrues div').attr('class');
		var Imgs= new Array("img7","img1","img2","img3","img4","img5","img6");
		console.log(Imgs[0]);
		var target = e.target;
		var newUrl = ($(target).attr("newUrl"));
		var contentDetail = ($(target).attr("data-next"));
		var is = ($(target).attr("is"));
		var divcss = {background:'url(images/advantages/'+targetClass+'_click.png)'};
		var targetClass = $(target).attr('class');
		$('.img7').css("cssText","background:url(images/advantages/img7.png) no-repeat");
		$('.img1').css("cssText","background:url(images/advantages/img1.png) no-repeat");
		$('.img2').css("cssText","background:url(images/advantages/img2.png) no-repeat");
		$('.img3').css("cssText","background:url(images/advantages/img3.png) no-repeat");
		$('.img4').css("cssText","background:url(images/advantages/img4.png) no-repeat");
		$('.img5').css("cssText","background:url(images/advantages/img5.png) no-repeat");
		$('.img6').css("cssText","background:url(images/advantages/img6.png) no-repeat");
		$(target).attr('is',true);
		$(target).css('background-image','url('+newUrl+')');
		$('#'+contentDetail).show().siblings().hide();
		return Session.set('isHover', true),Session.set('isClick', true);
	},
	// 'mouseover .pictures div': function (e) {
	// 	var tab = e.currentTarget;
	// 	var newUrl = ($(tab).attr("newUrl"));
	// 	console.log(newUrl);
	// 	$(tab).css('background-image','url('+newUrl+')');
	// },
	// 'mouseout .pictures div':function (e) {
	// 	var tab = e.currentTarget;
	// 	var newUrl = ($(tab).attr("newUrl"));
	// 	var oldUrl = ($(tab).attr("oldUrl"));
	// 	// console.log(oldUrl);
	// 	var is = ($(tab).attr("is"));
	// 	if (Session.get('isHover')) {
	// 		$(tab).css('background-image','url('+newUrl+')');
	// 	} else{
	// 		console.log(is)
	// 		$(tab).css('background-image','url('+oldUrl+')');
	// 	}
	// 	return Session.set('isHover', false);
	// }
});