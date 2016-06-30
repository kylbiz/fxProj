Template.distribution.onRendered(function () {
	$('#industrialD').removeClass('hide');
	$('#east').addClass('active');
	//入驻企业轮播
	var sWidth = $("#getinCo").width(); //获取焦点图的宽度（显示面积）
	var len = $("#getinCo ul li").length; //获取焦点图个数
	var Lwidth = $("#getinCo ul li img").width();
	var left = parseInt($("#getinCo ul").css('left'));
	var index = 0;
	var picTimer;
	//上一页按钮
	$("#getinCo .arrow-left").click(function() {
	    index -= 1;
	    
	    if(index == -1) {index = len - 1;}
	    showPics(index);
	});

	//下一页按钮
	$("#getinCo .arrow-right").click(function() {
	    index += 1;
	    if(index == len-3 || left < -560 ) {index = 0;}
	    showPics(index);
	});

	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#getinCo ul").css("width",len*140);
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
	    var nowLeft = -index*140; //根据index值计算ul元素的left值
	    $("#getinCo ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
	}
})
Template.distribution.events({
	'click .important li': function (event) {
		// ...
		var target = event.target;
		if ($(target).index() != 0) {
			$(target).addClass('active').siblings().removeClass('active');
		}
	},
	'click .distribute li': function (event) {
		// ...
		var target = event.target;
		if ($(target).index() != 0) {
			$(target).addClass('active').siblings().removeClass('active');
		}
	},
	'click #east': function (event) {
		$('#industrialD').removeClass('hide');
		$('#importantContent').addClass('hide');
	},
	'click #importantIndus': function (event) {
		$('#importantContent').removeClass('hide');
		$('#industrialD').addClass('hide');
		$('.distribute li').removeClass('active');
	}
});