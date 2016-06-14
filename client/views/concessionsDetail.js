Template.concessionsDetail.onRendered(function () {
	 // body...  

})

Template.concessionsDetail.events({
	'click .ul-tabs li': function (event) {
		// ...
		const target = event.target;
		$(target).addClass('button-change border-change').siblings().removeClass('button-change border-change');
	}
});