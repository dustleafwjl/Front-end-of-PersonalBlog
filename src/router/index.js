import Vue from 'vue'
import Router from 'vue-router'

import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'

import Index from '@/page/index.vue'
import About from '@/page/about.vue'
import SiteMap from '@/page/sitemap.vue'
import GuestBook from '@/page/guestbook.vue'
import BlogDetail from '@/page/blogdetail.vue'

import UpdateWord from '@/page/updateEvery.vue'
import InsertBlog from '@/page/insertBlog.vue'


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
          path: '/index',
          name: 'index',
          component: Index
        }, {
          path: '/about',
          name: 'about',
          component: About
        }, {
          path: '/guestbook',
          name: 'guestbook',
          component: GuestBook
        }, {
          path: '/blogdetail',
          name: 'blogDetail',
          component: BlogDetail
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [{
        path: 'sitemap',
        name: 'sitemap',
        component: SiteMap
      }, {
        path: 'updateword',
        name: 'updateword',
        component: UpdateWord
      }, {
        path: 'insertblog',
        name: 'insertblog',
        component: InsertBlog
      }]
    }
  ]
})
