Template.searchPolicy.onRendered(function () {

})

Template.searchPolicy.events({
	'click .ul-text ul li': function (event) {
		var target = event.target;		
		$(target).find('input').click();
		$(target).find('input').click(function(){
			if ($(target).find('input').is(':checked')) {
				$(target).addClass('normal-red');
			} else {
				$(target).removeClass('normal-red');
			}
		});
		if ($(target).find('input').is(':checked')) {
			$(target).addClass('normal-red');
		} else {
			$(target).removeClass('normal-red');
		}
	},
})