Template.concessions.onRendered(function () {
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
})

Template.successCases.onRendered(function () {
	$("#demo3").jqPaginator({
	            totalPages: 100,
	            visiblePages: 10,
	            currentPage: 1,
	            prev: '<a class="prev" href="javascript:void(0);">&lt;<\/a>',
	            next: '<a class="next" href="javascript:void(0);">&gt;<\/a>',
	            page: '<a href="javascript:void(0);">{{page}}<\/a>',
	            onPageChange: function (n) {
	                $("#demo3-text").html("当前第" + n + "页");
	            }
	});
})