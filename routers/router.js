
//公司首页
Router.route('/' , {
	name: 'home'
});


//注册登录
Router.route('/login',{
	name: 'loginRegist'
})


//简介
Router.route('/introduction',{
	name: 'introduction'
})


//奉贤优势 
Router.route('/advantages',{
	name: 'fxAdvantages'
})


//联系我们
// Router.route('/concessions', {
// 	name: 'concessions'
// })

Router.route('/concessions/detail', {
	name: 'concessionsDetail'
})

//选择奉贤
Router.route('/select/transportation', {
	name: 'transportation'
})

Router.route('/select/focus', {
	name: 'focus'
})

Router.route('/contactus',{
	name: 'contactUs'
})

//投资流程
Router.route('/process',{
	name: 'process'
})


//成本计算器
Router.route('/counter',{
	name: 'counter'
})


//园区详情
Router.route('/investGuide/zoneDetail',{
	name: 'zoneDetail'
})

//优惠政策
Router.route('/investGuide/concessions',{
	name: 'concessions'
})


//案例详情（三级）
Router.route('/investGuide/caseDetail',{
	name: 'caseDetail'
})


// 镇、开发区
Router.route('/investGuide/zdev',{
	name: 'zdev'
})


//成功案例
Router.route('/investGuide/successCases',{
	name: 'successCases'
})


//土地详情


//产业资源
Router.route('/indutryResource/plant',{
	name: 'plant'
})
Router.route('/indutryResource/land',{
	name: 'land'
})
Router.route('/indutryResource/building',{
	name: 'building'
})

Router.route('/indutryResource/landDetail',{
	name: 'landDetail'
})


//开发区详情 （三级）
Router.route('/indutryResource/devDetail',{
	name: 'devDetail'
})


//楼宇详情
Router.route('/indutryResource/buildings',{
	name: 'buildings'
})

//厂房详情
Router.route('/indutryResource/plantDetail',{
	name: 'plantDetail'
})
//一键对比
Router.route('/comparison',{
	name: 'comparison'
})

// 重点产业
Router.route('/indutryCluster/distribution',{
	name: 'distribution'
})


//项目详情
Router.route('/mediaCenter/projectDetail',{
	name: 'projectDetail'
})

//交通
// Router.route('/transportation', {
// 	name: 'transportation'
// })

// 媒体中心
Router.route('/mediaCenter', {
	name: 'mediaCenter'
})

