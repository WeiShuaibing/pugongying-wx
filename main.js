import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'

Vue.config.productionTip = false

Vue.prototype.$BASE_HOME = 'http://192.168.0.101:8080'

Vue.use(uView)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
