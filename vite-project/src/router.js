import { createRouter, createWebHashHistory } from "vue-router"
import HelloWorld from './components/HelloWorld.vue'
import AddArticle from './components/AddArticle.vue'
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/add', component: AddArticle },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export {router};