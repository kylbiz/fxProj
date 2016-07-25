Template.successCases.onRendered(function () {
	$('.list-case').each(function () {
		var that = this;
		$(this).hover(function () {
			$(that).addClass('blue');
			var img = $(that).find('img').attr('src');
			var png = '.png';
			var img1 = img.toString().replace(png, '');
			// console.log(img1);
			$(that).find('img').attr('src',img1 + '1.png');
		}, function () {
			$(that).removeClass('blue');
			var img = $(that).find('img').attr('src');
			var png = '1.png';
			var img1 = img.toString().replace(png, '');
			// console.log(img1);
			$(that).find('img').attr('src',img1 + '.png');
		});
	});
})

Template.successCases.events({
	'click .list-case': function (e) {
		// Router.go('distribution');
		window.location.href = '/indutryCluster/distribution';
	}
});