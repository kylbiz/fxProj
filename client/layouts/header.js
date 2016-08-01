Template.header.onRendered(function() {
    var hoverTimer,outTimer;
    var outDuring = 200;
    $("li.nav1").each(function() {
        var that = this;
        $(this).hover(
            function() {
                //nav 上停留一秒再出现二级导航
                // timer = setTimeout(function(){
                    clearTimeout(outTimer);
                    $(this).find("p").css('color', "#11719c");
                    hoverTimer = setTimeout(function(){
                        var index = $(".nav1").index($(that));
                        if ($(that).attr('name') === 'nonav') {
                            $(".second-nav").slideUp("slow");
                            return;
                        }
                        $(".second-nav").slideDown("slow");
                        $(".sec-nav").eq(index - 1).show().siblings().hide();
                        $(".sec-nav").eq(index - 1).find("ul").show();
                    }, outDuring);
                },
                function() {
                    // $(this).find("ul:eq(0)"	).hide();
                    // clearTimeout(timer);
                    $(this).find("p:first-child").css('color', "#666666");
                    $(this).find("p.en").css('color', "#666666");
                }
            )
    });
    $(".second-nav").hover(
        function() {
            console.log('love');
        },
        function() {
            var that = this;
            clearTimeout(hoverTimer);
            outTimer = setTimeout(function(){
                $(that).find("ul:eq(0)").hide();
                $(".second-nav").slideUp("slow");
            }, outDuring);
        }
    )
})

Template.header.helpers({
    mouseTime: function () {
        // ...
        var mouseover = this.onmouseover,
            mouseout = this.onmouseout;
        return
    }
});

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
});
