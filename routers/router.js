//公司首页
Router.route('/', {
	name: 'home'
});


//注册登录
Router.route('/login', {
	name: 'loginRegist'
})
//简介
Router.route('/introduction', {
	name: 'introduction'
})

//新闻详情
Router.route('/news', {
	name: 'news'
})

//奉贤优势
Router.route('/advantages', {
	name: 'fxAdvantages'
})
Router.route('/advantages/1', {
	name: 'fxAdvantages1'
})



//政策详情
Router.route('/concessionsdetail/1', {
	name: 'concessionsDetail1'
})

Router.route('/concessionsdetail/2', {
	name: 'concessionsDetail2'
})


Router.route('/concessionsdetail/3', {
	name: 'concessionsDetail3'
})

Router.route('/concessionsdetail/4', {
	name: 'concessionsDetail4'
})

Router.route('/concessionsdetail/5', {
	name: 'concessionsDetail5'
})



//区位交通
Router.route('/select/transportation', {
	name: 'transportation'
})

//特色聚集
Router.route('/select/focus', {
	name: 'focus'
})

// Router.route('/contactus',{
// 	name: 'contactUs'
// })
Router.route('/contactus/aboutus', {
	name: 'aboutus'
})
Router.route('/contactus/advice', {
	name: 'advice'
})
Router.route('/contactus/contact', {
	name: 'contact'
})
Router.route('/contactus/map', {
	name: 'map'
})

//投资流程
Router.route('/process', {
	name: 'process'
})


//成本计算器
Router.route('/counter', {
	name: 'counter'
})


//园区详情
Router.route('/investGuide/zoneDetail', {
	name: 'zoneDetail'
})

//政策查询
Router.route('/searchPolicy', {
		name: 'searchPolicy'
	})
	//优惠政策
Router.route('/investGuide/concessions', {
	name: 'concessions'
})


//案例详情（三级）
Router.route('/investGuide/caseDetail', {
	name: 'caseDetail'
})


// 镇、开发区
Router.route('/investGuide/zdev', {
	name: 'zdev'
})


//成功案例
Router.route('/investGuide/successCases', {
			name: 'successCases'
})



//产业资源
Router.route('/indutryResource/plant', {
	name: 'plant'
})
Router.route('/indutryResource/land', {
	name: 'land'
})
Router.route('/indutryResource/building', {
	name: 'building'
})


//土地详情
Router.route('/indutryResource/landDetail', {
	name: 'landDetail'
})


//开发区详情 （三级）
Router.route('/indutryResource/devDetail', {
	name: 'devDetail'
})


//楼宇详情
Router.route('/indutryResource/buildings', {
	name: 'buildings'
})

//厂房详情
Router.route('/indutryResource/plantDetail1', {
	name: 'plantDetail1'
})
Router.route('/indutryResource/plantDetail2', {
	name: 'plantDetail2'
})
Router.route('/indutryResource/plantDetail3', {
	name: 'plantDetail3'
})
Router.route('/indutryResource/plantDetail4', {
		name: 'plantDetail4'
	})
	// Router.route('/indutryResource/plantDetail5',{
	// 	name: 'plantDetail5'
	// })
	//一键对比
Router.route('/comparison', {
	name: 'comparison'
})

// 重点产业
Router.route('/indutryCluster/distribution', {
		name: 'distribution'
	})
	//项目详情
Router.route('/mediaCenter/projectDetail', {
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

//   

Router.route('/userCenter', {
	name: 'userCenter'
})