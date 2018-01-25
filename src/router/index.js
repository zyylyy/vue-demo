import Vue from 'vue'
import Router from 'vue-router'

import main from '../view/main/index'
import demo from '../view/demo/index'
import markfdown from '../view/markfdown/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'main',
		redirect:'/demo',//重定向
		component: main,
		children: [
		    {
				path: '/demo',
				name: 'demo',
				component: demo,
		    },
		    {
				path: '/markfdown',
				name: 'markfdown',
				component: markfdown,
		    },
		],
    }
  ]
})
