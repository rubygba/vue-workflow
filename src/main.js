import Vue from 'vue'
// load extra node_modules
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './App'
import Hello from './components/Hello'

Vue.use(Resource)
Vue.use(Router)

/* eslint-disable no-new */
// new Vue({
//     el: 'body',
//     components: { App, Hello }
// })

// start router
var router = new Router()

router.map({
    '/': {
        component: App
    },
    '/project/detail/:projectId': {
        name: 'projects',
        component: Hello
    },
    '/project/detail/': {
        name: 'projectDetail',
        component: Hello
    }
})

router.redirect({
    '*': '/'
})

// 初始化，在<app>:index.html挂载组件
// start with <app>:index
router.start(App, 'app')

router.afterEach(function (transition) {
    console.log('成功浏览到: ' + transition.to.path)
})
// end router
