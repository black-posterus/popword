import Vue from 'vue'
import Router from 'vue-router'
import Word2016 from '@/components/Word2016'
import Word2017 from '@/components/Word2016'
import Word2018 from '@/components/Word2016'
import Word2019 from '@/components/Word2016'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Word2016',
      component: Word2016
    },
    {
      path: '/',
      name: 'Word2017',
      component: Word2017
    },
    {
      path: '/',
      name: 'Word2018',
      component: Word2018
    },
    {
      path: '/',
      name: 'Word2019',
      component: Word2019
    },
  ]
})
