Template.introduction.onRendered(function () {
	    var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	    var len = $("#focus ul li").length; //获取焦点图个数
	    var Lwidth = $("#focus ul li img").width();
	    var index = 0;
	    var picTimer;
	    //上一页按钮
	    $("#focus .arrow-left").click(function() {
	        index -= 1;
	        if(index == -1) {index = len - 1;}
	        showPics(index);
	    });

	    //下一页按钮
	    $("#focus .arrow-right").click(function() {
	        index += 1;
	        if(index == len-1) {index = 0;}
	        showPics(index);
	    });

	    //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	    $("#focus ul").css("width",len*340);

	    //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	    $("#focus").hover(function() {
	        clearInterval(picTimer);//clearInterval取消由下面的setInterval设置的timeout，其参数必须是setInterval的返回值
	    },function() {
	        picTimer = setInterval(function() { 
	        showPics(index);
	        index++;
	        if(index == len-2) {index = 0;}//设置循环，当前index如果等于图片数目，index置0
	        },4000); //此4000代表自动播放的间隔，单位：毫秒
	    }).trigger("mouseleave");

	    //显示图片函数，根据接收的index值显示相应的内容
	    function showPics(index) { //普通切换
	        var nowLeft = -index*340; //根据index值计算ul元素的left值
	        $("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
	    }
})

Template.introduction.events({
	'click': function () {
		// ...
	}
});