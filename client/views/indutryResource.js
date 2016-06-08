Template.land.onRendered(function () {
	$("#jqPaginator").jqPaginator({
	            totalPages: 100,
	            visiblePages: 10,
	            currentPage: 1,
	            prev: '<a class="prev" href="javascript:void(0);">&lt;<\/a>',
	            next: '<a class="next" href="javascript:void(0);">&gt;<\/a>',
	            page: '<a href="javascript:void(0);">{{page}}<\/a>',
	            onPageChange: function (n) {
	               
	            }
	});
	$('#land').addClass('button-change');
})


Template.land.events({
	'click .tabs': function (event) {
		// ...
		event.preventDefault();
		var target = event.currentTarget;
		$(target).first().toggleClass('button-change').siblings().removeClass('button-change');
	}
});

Template.building.onRendered(function () {
	$("#jqPaginator").jqPaginator({
	            totalPages: 100,
	            visiblePages: 10,
	            currentPage: 1,
	            prev: '<a class="prev" href="javascript:void(0);">&lt;<\/a>',
	            next: '<a class="next" href="javascript:void(0);">&gt;<\/a>',
	            page: '<a href="javascript:void(0);">{{page}}<\/a>',
	            onPageChange: function (n) {
	               
	            }
	});
	$('#building').addClass('button-change');
})

Template.plant.onRendered(function () {
	$("#jqPaginator").jqPaginator({
	            totalPages: 100,
	            visiblePages: 10,
	            currentPage: 1,
	            prev: '<a class="prev" href="javascript:void(0);">&lt;<\/a>',
	            next: '<a class="next" href="javascript:void(0);">&gt;<\/a>',
	            page: '<a href="javascript:void(0);">{{page}}<\/a>',
	            onPageChange: function (n) {
	               
	            }
	});
	$('#plant').addClass('button-change');
})