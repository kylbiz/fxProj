
Template.devDetail.onRendered(function() {
    //高德地图
    var map = new AMap.Map('mapcontainer',{
          resizeEnable: true,
          zoom: 20,
          center: [121.433602,30.953666]
    });
    AMap.plugin('AMap.AdvancedInfoWindow',function(){
        var infowindow = new AMap.AdvancedInfoWindow({
        content: '<img src="../images/dev/map-pic.png"></img>',
        offset: new AMap.Pixel(0, -30),
        asOrigin:false
    });
    infowindow.open(map,new AMap.LngLat(121.433602,30.953666));
  });


});

Template.devDetail.events({
  "click ul .list-tab": function(e){
    var tab = e.target;
    var index = $('.list-tab').index(tab);
    $(tab).addClass('active').siblings().removeClass('active');
    $('.twotab .box').eq(index).show().siblings().hide();
  },
  // "mouseover .item":function(){
  //   $(".item-title").css('color','red');
  // }
});
