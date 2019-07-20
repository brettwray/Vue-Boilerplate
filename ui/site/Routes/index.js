import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const home = () => import('../components/pages/home/0001')
const signIn = () => import('../components/pages/sign-in/0001')

const routes = [
  { path :'/', component: home  },
  { path: '/login', component: signIn }
]


export default  new VueRouter({
  mode: 'history',
  routes: routes
})
