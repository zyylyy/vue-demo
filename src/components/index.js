import Vue from 'vue'
import demo from './demo/index.vue'
import header from './header/index.vue'
import footer from './footer/index.vue'
import nav from './nav/index.vue'
import echarts from './echarts/index.vue'
import breadcrumb  from './breadcrumb/index.vue'

const install = function (Vue) {
    Vue.component(demo.name, demo)
    Vue.component(header.name, header)
    Vue.component(footer.name, footer)
    Vue.component(nav.name, nav)
    Vue.component(echarts .name, echarts)
    Vue.component(breadcrumb.name, breadcrumb)

}

export default install;