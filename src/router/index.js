// import Vue from 'vue'
// import Router from 'vue-router'
// import store from '@/store.js'


const defaultPage = () => import('@/layout/default.vue')
const blankPage = () => import('@/layout/blank.vue')
const Refresh = () => import('@/page/refresh.vue')
// import blankPage from '@/layout/blank.vue'

const Index = () => import ('@/page/index.vue')
const About = () => import ('@/page/about.vue')
const SiteMap = () => import ('@/page/sitemap.vue')
const GuestBook = () => import ('@/page/guestbook.vue')
const BlogDetail = () => import ('@/page/blogdetail.vue')
// import Index from '@/page/index.vue'
// import About from '@/page/about.vue'
// import SiteMap from '@/page/sitemap.vue'
// import GuestBook from '@/page/guestbook.vue'
// import BlogDetail from '@/page/blogdetail.vue'


const Login = () => import('@/page/login.vue')
const Console = () => import('@/page/console.vue')
// import UpdateWord from '@/page/updateEvery.vue'
// import InsertBlog from '@/page/insertBlog.vue'

const BlogList = () => import('@/components/blank/console/right-content/blogList.vue')
const UpdateWord = () => import('@/components/blank/console/right-content/updateEvery.vue')
const InsertBlog = () => import('@/components/blank/console/right-content/insertBlog.vue')
const UpdateBlog = () => import('@/components/blank/console/right-content/updateBLog.vue')

const Mobile = () => import("@/mobile_page/mobile.vue")
const MobileIndex = () => import("@/mobile_page/index.vue")
const MobileAbout = () => import("@/mobile_page/about.vue")
const MobileGuest = () => import("@/mobile_page/guestbook.vue")
const mBlogDetail = () => import("@/mobile_page/m-blog-detail.vue")


export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/pc',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/pc/index',
      children: [{
          path: 'index',
          name: 'index',
          component: Index
        }, {
          path: 'about',
          name: 'about',
          component: About
        }, {
          path: 'guestbook',
          name: 'guestbook',
          component: GuestBook
        }, {
          path: 'blogdetail',
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
        path: 'login',
        name: 'login',
        component: Login
      }, {
        path: 'console',
        name: 'console',
        component: Console,
        redirect: '/blank/console/bloglist',
        children: [{
          path: 'bloglist',
          name: 'bloglist',
          component: BlogList
        }, {
          path: 'updateword',
          name: 'updateword',
          component: UpdateWord
        }, {
          path: 'insertblog',
          name: 'insertblog',
          component: InsertBlog
        }, {
          path: 'updateblog',
          name: 'updateblog',
          component: UpdateBlog
        }
        ],
        beforeEnter: (to, from, next) => {
          if(localStorage.getItem("user")) {
            next();
          }else {
            const answer = confirm('你还没有登录，要登录后才能浏览信息，要登录吗？');
            if(answer) {
              next({name: 'login'});
            }else {
              next({name: "index"});
            }
          }
        }
      }]
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: Mobile,
      redirect: "/mobile/m-index",
      children: [{
        path: "m-index",
        name: "m-index",
        component: MobileIndex
      }, {
        path: 'm-about',
        name: 'm-about',
        component: MobileAbout
      }, {
        path: 'm-guestbook',
        name: 'm-guestbook',
        component: MobileGuest
      }, {
        path: 'm-blogdetail',
        name: 'm-blogdetail',
        component: mBlogDetail
      }]
    },
    {
      path: '/refresh',
      name: 'refresh',
      component: Refresh
    }
  ],
  linkActiveClass: 'active'
})
