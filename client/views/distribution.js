Template.distribution.onRendered(function() {
	$('#importantContent').removeClass('hide');
	// $('#east').addClass('active');
	// 重点产业轮播
	var sWidth = $("#importantslider").width(); //获取焦点图的宽度（显示面积）
	var len = $("#importantslider ul li").length; //获取焦点图个数
	var Lwidth = $("#importantslider ul li img").width();
	var left = parseInt($("#importantslider ul").css('left'));
	var index = 0;
	var picTimer;
	//上一页按钮
	console.log('焦点图', Lwidth);
	$(".slider .arrow-left").click(function() {
		console(index)
		index -= 1;
		if (index == -1) {
			index = len - 5;
		}
		showPics1(index);
		console.log('上一页', index);
	});
	//下一页按钮
	$(".slider .arrow-right").click(function() {
		index += 1;
		if (index == 2) {
			index = 0;
		}
		showPics1(index);
		console.log('下一页', index);
	});
	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#importantslider ul").css("width", len * 140);
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics1(index) { //普通切换
		var nowLeft = -index * 150; //根据index值计算ul元素的left值
		$("#importantslider ul").stop(true, false).animate({
			"left": nowLeft
		}, 300); //通过animate()调整ul元素滚动到计算出的position
	}
	//重点产业点击滑动特效
	$('.slider-content ul li').each(function() {
		var that = this;
		$(this).hover(function() {
			var img = $(that).find('img').attr('src');
			var jpg = '.jpg';
			var img1 = img.toString().replace(jpg, '');
			// console.log(img1);
			$(that).find('img').attr('src', img1 + '1.jpg');
		}, function() {
			$(that).removeClass('blue');
			var img = $(that).find('img').attr('src');
			var jpg = '1.jpg';
			var img1 = img.toString().replace(jpg, '');
			// console.log(img1);
			$(that).find('img').attr('src', img1 + '.jpg');
		});
	});
	//入驻企业轮播
	var sWidth = $(".getinCo").width(); //获取焦点图的宽度（显示面积）
	var len = $(".getinCo ul li").length; //获取焦点图个数
	// var Lwidth = $(".getinCo ul li img").width();
	var Lwidth = 120;
	var left = parseInt($(".getinCo ul").css('left'));
	var index = 0;
	var picTimer;

	console.log(len, left, Lwidth)
		//上一页按钮
	$(".cos .arrow-left").click(function() {
		index -= 1;
		if ($(".getinCo ul").css('left') == '0px') {
			return;
		} else if (index == -1) {
			index = len - 1;
			showPics(index);
		}
	});
	//下一页按钮
	$(".cos .arrow-right").click(function() {
		index += 1;
		if (index == len - 3 || left < -560) {
			index = 0;
		}
		showPics(index);
	});

	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$(".getinCo ul").css("width", len * 140);
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index * 160; //根据index值计算ul元素的left值
		$(".getinCo ul").stop(true, false).animate({
			"left": nowLeft
		}, 300); //通过animate()调整ul元素滚动到计算出的position
	}
})
Template.distribution.events({
	'click .distribute li': function(event) {
		// ...
		var target = event.target;
		if ($(target).index() != 0) {
			$(target).addClass('active').siblings().removeClass('active');
		}
		var targetId = $(target).attr('id');
		$('.fourboxs .box').each(function() {
			if ($(this).attr('data-dir') == targetId) {
				$(this).removeClass('hide').siblings().addClass('hide');
			}
		});
		$('.jqPaginator').removeClass('hide');
		$('.important li').removeClass('active');
		// $('#nowadaycontent').addClass('hide');
		$('#industrialD').removeClass('hide');
		$('#importantContent').addClass('hide');
		$('#nowadaycontent').addClass('hide');
	},
	// 'click .distribute li': function(event) {
	// 	$('#industrialD').removeClass('hide');
	// 	$('#importantContent').addClass('hide');
	// 	$('#nowadaycontent').addClass('hide');
	// },
	'click .important li': function(event) {
		var target = event.target;
		var val = $(target).attr('val');
		if ($(target).index() != 0) {
			$(target).addClass('active').siblings().removeClass('active');
		}
		$('#rightImportant div').each(function(e) {
			if ($(this).attr('id') == val) {
				$(this).removeClass('hide').siblings().addClass('hide');
			} else {}
		})
		$('#industrialD').addClass('hide');
		$('.distribute li').removeClass('active');
		$('#industrialD').addClass('hide');
		// $('#importantContent').removeClass('hide');
		// $('#nowadaycontent').removeClass('hide');
	},
	'click .slider-content ul li': function(e) {
		var target = e.currentTarget;
		var datacon = $(target).attr('data-con');
		console.log($(target).attr('data-con'));
		$('.news div').each(function() {
			// console.log(this);
			if ($(this).attr('id') == datacon) {
				$(this).removeClass('hide').siblings().addClass('hide');
			} else {

			}
		})
	}
});