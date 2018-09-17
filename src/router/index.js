import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import city from '../components/city/city'
import home from '../components/home'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
    path: '/',
    component: home,
    name: "Home"
  }, {
    path: "/city",
    component: city,
    name: "City"
  }]
})
