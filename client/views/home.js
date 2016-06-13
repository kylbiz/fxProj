Template.home.onRendered(function() {


	// Home slider
	$(document).ready(function() {

		var slideShow = $('.slider'),   //获取整个div
			ul = slideShow.find('ul'),		//获取图片列表
			nav = slideShow.find('.slider-nav span'),	//获取导航 span
			moveWidth = ul.find('li').eq(1).width(),  //以单张图片的宽度作为每次移动的宽度
			timer = null,  //初始化一个定时器
			iNow = 0;

		//	 鼠标hover 的时候停止轮播，鼠标移出的时候继续上次位置开始轮播	
		slideShow.hover(function() {

			clearInterval(timer);

		},autoPlay);


		nav.on('click',function() {   // 点击导航span的时候添加active样式 

			var me = $(this),
				index = me.index()

			iNow = index;  //解决点击后会回到第一张图片的bug

			ul.animate ({ // 由 css 改为 animate 实现动画效果
				'left': - moveWidth * iNow + 'px'
			})


			nav.removeClass('active');  //添加之前去除active样式，防止重复
			me.addClass('active');

		});

		autoPlay();  //初始化的时候先调用 autoPlay

		function autoPlay() {

			timer = setInterval(function() {

				iNow++;

				if (iNow > nav.length -1 ) 
					iNow = 0;

				nav.eq(iNow).trigger('click'); //trigger自动触发事件

			}, 3000);

		}

	});

	//新闻滚动条
	$(document).ready(function() {

		setInterval(function () {
			console.log(1)
			$(".news-slider").find("ul:first").animate({
				marginTop: "-60px"
			},500,function() {
				$(this).css({marginTop: "0px"}).find("li:first").appendTo(this);
			});

		},4000);

	});
	
})



Template.home.events({

	'mouseover .tab': function (e) {
		var tab = e.target;
		var index = $('.tab').index(tab);
		$(tab).addClass('active').siblings().removeClass('active');
		$('.tab-items .box-item').eq(index).show().siblings().hide();
	},

	'mouseover .box-item a > div': function (e) {
		var tab = e.currentTarget;
		$(tab).addClass('active').siblings().removeClass('active');
	},
	'mouseout .box-item a > div': function (e) {
		var tab = e.currentTarget;
		$(tab).removeClass('active');
	},
	'click .video': function() {
    	AntiModals.overlay('videoModal');
  	},
});