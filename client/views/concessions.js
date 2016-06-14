Template.concessions.onRendered(function () {
	// $("#jqPaginator").jqPaginator({
	//             totalPages: 15,
	//             visiblePages: 10,
	//             currentPage: 1,
	//             first: '<a href="javascript:void(0);" class="first"> <i class="fa fa-angle-double-left" aria-hidden="true"><\/i><\/a>',
	//             prev: '<a class="prev" href="javascript:void(0);">&lt;<\/a>',
	//             next: '<a class="next" href="javascript:void(0);">&gt;<\/a>',
	//             page: '<a href="javascript:void(0);">{{page}}<\/a>',
	//             last: '<a href="javascript:void(0);" class="last"><i class="fa fa-angle-double-right" aria-hidden="true"><\/i><\/a>',
	//             onPageChange: function (n) {
	               
	//             }
	// });
})
Template.concessions.events({
	'click .ul-text ul li': function (event) {
		// ...
		$(event.target).toggleClass('normal-red');

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

