import { createRouter, createWebHistory } from 'vue-router'
import Header from '../components/Header'
import About from '../components/About'
import Service from '../components/Service'
import Projets from '../components/Projets'
import Contact from '../components/Contact'


const routes = [
  {
    path: '/',
    name: 'Header',
    component: Header
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
},
  {
    path: '/about',
    name: 'About',
    component: About,
  },
{
    path: '/projets',
    name: 'Projets',
    component: Projets,
},

{
    path: '/contact',
    name: 'Contact',
    component: Contact,
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
