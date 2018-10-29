import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import SidePage from './views/SidePage.vue'
import SidePage1 from './views/side-page-sub/SidePage1.vue'
import SidePage2 from './views/side-page-sub/SidePage2.vue'
import SidePage3 from './views/side-page-sub/SidePage3.vue'
import SidePage4 from './views/side-page-sub/SidePage4.vue'
import DataPage from './views/DataPage.vue'
import GenrePage1 from './views/genre-page-sub/GenrePage1.vue'
import GenrePage2 from './views/genre-page-sub/GenrePage2.vue'
import GenrePage3 from './views/genre-page-sub/GenrePage3.vue'
import GenrePage4 from './views/genre-page-sub/GenrePage4.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
          path: '/home',
          name: 'home',
          component: Home
      },
    {
      path: '/about',
      name: 'about',
      component: About,
        children: [
            {
                path: '/',
                component: GenrePage1
            },
            {
                path: 'genrepage1',
                component: GenrePage1
            },
            {
                path: 'genrepage2',
                component: GenrePage2
            },
            {
                path: 'genrepage3',
                component: GenrePage3
            },
            {
                path: 'genrepage4',
                component: GenrePage4
            }
        ]
    },{
          path: '/datapage',
          name: 'dataPage',
          component: DataPage
      },
      {
          path: '/sidepage',
          name: 'sidePage',
          component: SidePage,
          children: [
              {
                  path: '/',
                  component: SidePage1
              },
              {
                  path: 'sidepage1',
                  component: SidePage1
              },
              {
                  path: 'sidepage2',
                  component: SidePage2
              },
              {
                  path: 'sidepage3',
                  component: SidePage3
              },
              {
                  path: 'sidepage4',
                  component: SidePage4
              }
          ]
      }
  ]
})
