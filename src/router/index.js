import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import hello from '../components/hello'
import home from '../components/home'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
    path: '/',
    component: home,
    name: "Home"
  }, {
    path: "/hello",
    component: hello,
    name: "Hello"
  }]
})
