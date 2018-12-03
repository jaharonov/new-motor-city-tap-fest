import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Auditions from '@/components/Auditions'
import ChorChal from '@/components/ChorChal'
import Faculty from '@/components/Faculty'
import Give from '@/components/Give'
import LocAccom from '@/components/LocAccom'
import McSoles from '@/components/McSoles'
import SchedReg from '@/components/SchedReg'
import Scholarships from '@/components/Scholarships'
import Store from '@/components/Store'
import Partshowcase from '@/components/Partshowcase'
import Press from '@/components/Press'
import Visit from '@/components/Visit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/auditions',
      name: 'Auditions',
      component: Auditions
    },
    {
      path: '/chorchal',
      name: 'ChorChal',
      component: ChorChal
    },
    {
      path: '/faculty',
      name: 'Faculty',
      component: Faculty
    },
    {
      path: '/give',
      name: 'Give',
      component: Give
    },
    {
      path: '/locaccom',
      name: 'LocAccom',
      component: LocAccom
    },
    {
      path: '/mcsoles',
      name: 'McSoles',
      component: McSoles
    },
    {
      path: '/schedreg',
      name: 'SchedReg',
      component: SchedReg
    },
    {
      path: '/scholarships',
      name: 'Scholarships',
      component: Scholarships
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/press',
      name: 'Press',
      component: Press
    },
    {
      path: '/visit',
      name: 'Visit',
      component: Visit
    },
    {
      path: '/partshowcase',
      name: 'Partshowcase',
      component: Partshowcase
    }
  ]
})

