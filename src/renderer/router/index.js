import { createRouter, createWebHistory } from 'vue-router'
import ArticleEditView from '@/views/article/ArticleEdit.vue'
import HomeView from '@/views/Home.vue'
import ArticleView from '@/views/article/index.vue'
import SettingsView from '@/views/settings/index.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    redirect:'/article-index', //默认打开这个页面
    children:[
      {
        path: '/article-index',
        name: 'ArticleView',
        component: ArticleView
      },
      {
        path: '/settings',
        name: 'SettingsView',
        component: SettingsView
      },
    ]
  },
  {
    path: '/article-edit',
    name: 'ArticleEditView',
    component: ArticleEditView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
