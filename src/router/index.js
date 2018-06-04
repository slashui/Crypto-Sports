import Vue from 'vue'
import Router from 'vue-router'
import teamlist from '../views/teamlist.vue'
import TeamDetail from '../views/TeamDetail.vue'
import UserDetail from '../views/User.vue'
import Schedule from '../views/Schedule.vue'
import FAQ from '../views/FAQ.vue'
import Term from '../views/Term.vue'
import Privacy from '../views/Privacy.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: teamlist
    },

    {
      name: 'Item',
      path: '/item/:id(\\d+)',
      component: TeamDetail,
    },
    {
      name: 'User',
      path: '/User',
      component: UserDetail,
    },
    {
      name: 'schedule',
      path: '/schedule',
      component: Schedule,
    },
    {
      name: 'FAQ',
      path: '/FAQ',
      component: FAQ,
    }
    ,
    {
      name: 'Term',
      path: '/Term',
      component: Term,
    }
    ,
    {
      name: 'Privacy',
      path: '/Privacy',
      component: Privacy,
    }
  ]
})
