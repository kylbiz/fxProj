Template.home.onRendered(function() {
	// Home slider
	$(document).ready(function() {
		var slider = $('.my-slider').unslider({
		    keys: {
		        prev: 37,
		        next: 39,
		        stop: 27 //  Example: pause when the Esc key is hit
		    },
		    arrows: {
		        //  Unslider default behaviour
		        prev: '<a class="unslider-arrow prevh"><img src="images/index/left-naviarrow.png" alt=""></a>',
		        next: '<a class="unslider-arrow nexth"><img src="images/index/right-naviarrow.png" alt=""></a>',
		    },
		});
		// var slideShow = $('.slider'),   //获取整个div
		// 	ul = slideShow.find('.lists'),		//获取图片列表
		// 	nav = slideShow.find('.slider-nav span'),	//获取导航 span
		// 	moveWidth = ul.find('li').eq(1).width(),  //以单张图片的宽度作为每次移动的宽度
		// 	prev = $('#prev'),
		// 	next = $('#next'),
		// 	timer = null,  //初始化一个定时器
		// 	iNow = 0;

		// //	 鼠标hover 的时候停止轮播，鼠标移出的时候继续上次位置开始轮播
		// slideShow.hover(function() {
		// 	clearInterval(timer);
		// },autoPlay);


		// nav.on('click',function() {   // 点击导航span的时候添加active样式

		// 	var me = $(this),
		// 		index = me.index()

		// 	iNow = index;  //解决点击后会回到第一张图片的bug

		// 	ul.animate ({ // 由 css 改为 animate 实现动画效果
		// 		'left': - moveWidth * iNow + 'px'
		// 	})

		// 	nav.removeClass('active');  //添加之前去除active样式，防止重复
		// 	me.addClass('active');

		// });
		// prev.on('click',function(e) {
		// 	e.preventDefault;
		// 	if(parseInt(ul.css('left')) === 0) ul.css('left','-4800px');
		// 	ul.animate ({ // 由 css 改为 animate 实现动画效果
		// 		'left': parseInt(ul.css('left')) + moveWidth + 'px'
		// 	})
		// });

		// next.on('click',function(e) {
		// 	e.preventDefault;
		// 	if(parseInt(ul.css('left')) === -3840) ul.css('left','960px');
		// 	ul.animate ({ // 由 css 改为 animate 实现动画效果
		// 		'left': parseInt(ul.css('left')) - moveWidth + 'px'
		// 	})
		// });

		// autoPlay();  //初始化的时候先调用 autoPlay

		// function autoPlay() {

		// 	timer = setInterval(function() {

		// 		iNow++;

		// 		if (iNow > nav.length -1 )
		// 			iNow = 0;
		// 		nav.eq(iNow).trigger('click'); //trigger自动触发事件
		// 	}, 5000);

		// }

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

	'mouseover .zd a > div': function (e) {
		var tab = e.currentTarget;
		var newUrl = ($(tab).find("span").attr("src"));
		$(tab).addClass('activezd').siblings().removeClass('activezd');
		$(tab).find('img').attr('src',newUrl);
	},
	'mouseout .zd a > div': function (e) {
		var tab = e.currentTarget;
		var oldUrl = ($(tab).find("span").attr("oldsrc"));
		$(tab).removeClass('activezd');
		$(tab).find('img').attr('src',oldUrl);
	},

	'mouseover .xx a > div': function (e) {
		var tab = e.currentTarget;
		var newUrl = ($(tab).find("span").attr("src"));
		$(tab).addClass('activexx').siblings().removeClass('activexx');
		$(tab).find('img').attr('src',newUrl);
	},
	'mouseout .xx a > div': function (e) {
		var tab = e.currentTarget;
		var oldUrl = ($(tab).find("span").attr("oldsrc"));
		$(tab).removeClass('activexx');
		$(tab).find('img').attr('src',oldUrl);
	},

	'click .video': function() {
    	AntiModals.overlay('videoModal');
  	},
});
