Template.counter.helpers({
	isSelect: function (stepName) {
		return (Session.get('stepName') == stepName);
	}
})

Template.counter.events({
	'click .task_ul li a': function (event) {
	  //四个标签切换
	  var target = event.target ;
	  var index = $(" .tabs li").index(target);
	  $(target).addClass('active').siblings().removeClass('active');
	  $('.changecontent').eq(index).addClass('showcontent').siblings().removeClass('showcontent');
	},
	'click #next': function (event) {
		KEPUtil.alertMsg('asdasd!', 1);
	},
	'click .shadow': function (event) {
		var target = event.currentTarget;
		console.log(target);
		$(target).toggleClass('block');
	}
})