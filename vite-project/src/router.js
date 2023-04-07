import { createRouter, createWebHashHistory } from "vue-router"
const Home = { template: '<div>Homes</div>' }
const About = { template: '<div>About</div>' }
import HelloWorld from './components/HelloWorld.vue'
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/add', component: HelloWorld },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export {router};