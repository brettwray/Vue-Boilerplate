import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('Pages/home');

Vue.use(VueRouter)


const routes = [
  { path: '/', name: 'Home', component: Home }
]

export default new VueRouter({
  mode: 'history',
  routes
})
