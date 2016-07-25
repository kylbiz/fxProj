Template.concessions.onRendered(function () {
	$('.ul-text ul li:nth-child(2)').addClass('normal-red');
	$('.ul-text ul li:nth-child(2)').find('input').prop('checked','checked');
	// console.log($('.ul-text ul li:nth-child(2)').find('input').prop('checked'));
	$('#showUltext1').css('display','none');
	$('#showUltext2').css('display','none');
})
Template.concessions.events({
	'click .ul-text ul li': function (event) {
		var target = event.target;
		var arr = $('.ul-text ul li:nth-child(2)');
		var index = $(target).parent().index();
		console.log(index);
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
		if ($.inArray($(target), arr)) {
			// console.log($(arr).find("input").eq(index).prop('checked'));
			$(arr).find("input").prop('checked',false);
			$(target).parent().children().eq(1).removeClass('normal-red');
			// $(target).parent().children().eq(1).removeAttr('checked');
		} else {

		}
	},
	'click #upSpan1': function (event) {
			$('#showUltext1').toggleClass('Dblock').prev().toggleClass('spanChange');
	},
	'click #upSpan2': function (event) {
			$('#showUltext2').toggleClass('Dblock1').prev().toggleClass('spanChange');
	}
});
Template.jqPaginator.onRendered(function () {
	$("#jqPaginator").jqPaginator({
	            totalPages: 15,
	            visiblePages: 10,
	            currentPage: 1,
	            first: '<a href="javascript:void(0);" class="first"><i class="fa fa-angle-double-left" aria-hidden="true"><\/i><\/a>',
	            prev: '<a class="prev" href="javascript:void(0);"><i class="fa fa-angle-left" aria-hidden="true"></i><\/a>',
	            next: '<a class="next" href="javascript:void(0);"><i class="fa fa-angle-right" aria-hidden="true"></i><\/a>',
	            page: '<a href="javascript:void(0);">{{page}}<\/a>',
	            last: '<a href="javascript:void(0);" class="last"><i class="fa fa-angle-double-right" aria-hidden="true"><\/i><\/a>',
	            onPageChange: function (n) {
	               
	            }
	});
});

