Template.header.onRendered(function() {
    $("li.nav1").each(function() {
        $(this).hover(
            function() {
                //nav 上停留一秒再出现二级导航
                // timer = setTimeout(function(){
                    $(this).find("p").css('color', "#11719c");
                    var index = $(".nav1").index($(this));

                    if ($(this).attr('name') === 'nonav') {
                        $(".second-nav").slideUp("slow");
                        return;
                    }
                    $(".second-nav").slideDown("slow");
                    $(".sec-nav").eq(index - 1).show().siblings().hide();
                    $(".sec-nav").eq(index - 1).find("ul").show();
                },
                function() {
                    // $(this).find("ul:eq(0)"	).hide();
                    // clearTimeout(timer);
                    $(this).find("p:first-child").css('color', "#666666");
                    $(this).find("p.en").css('color', "#999999");
                }
            )
    })
    $(".second-nav").hover(
        function() {
            console.log('love');
        },
        function() {
            $(this).find("ul:eq(0)").hide();
            $(".second-nav").hide("slow");
        }
    )
})


            Template.header.events({
                'mouseover .qrcode': function() {
                    $('.qr-code').show();
                },
                'mouseout .qrcode': function() {
                    $('.qr-code').hide();
                },
                'click .good': function() {
                    $('#helper').show()
                    $('.choose-language ul').css('line-height', '35px')
                },
                'mouseover .sec-nav .left ul a': function (e) {
                    var target = e.currentTarget;
                    $(target).addClass('activeNav').siblings().removeClass('activeNav');
                },
                // 'click .nav .nav1': function(e) {
                // 	// var li = e.target.parentNode.parentNode.parentNode;
                // 	// var li2 = e.target.parents();
                // 	var event = e || window.e;
                // 	var li = event.currentTarget;
                // 	console.log(li)
                // 	$(li).addClass("navactive").siblings().removeClass("navactive");
                // 	// $(li).find("a").css('color',"#11719c");
                // 	// return false;
                // },
                // 'click .nav1 ul li': function(e) {
                // 	var event = e || window.e;
                // 	var li = event.target.parentNode.parentNode.parentNode;
                // 	$(li).addClass("navactive").siblings().removeClass("navactive");
                // },
                // 'click .sec-nav .left ul li': function(e) {
                //     var target = e.target;
                //     var index = $(".sec-nav .left ul li").index(target);
                //     console.log(index);
                //     $(target).addClass('activeNav').siblings().removeClass('activeNav');
                //     $('.nav-content').eq(index).show().siblings().hide();
                //     // $('.')
                // },
            });
