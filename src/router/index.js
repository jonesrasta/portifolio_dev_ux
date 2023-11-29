import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/Home.vue';
import Logo from '../components/Home/Logo/Logo.vue';
import Skills from '../../components/Home/Skills/SoftSkills.vue';
import TimeLine from '../../components/Home/Timeline/TimeLine.vue';
import Download from '../../components/Home/Download/Download.vue';
import Contact from '../../components/Home/Contact/Contact.vue';



const routes = [
  
  { path: '/', name: 'home', component: Home },

  { path: '/logo', name: 'logo', component: Logo },

  { path: '/skills', name: 'skills', component: Skills },

  { path: '/timeline', name: 'timeline', component: TimeLine },

  { path: '/downloand', name: 'downloand', component: Download},

  { path: '/contact', name: 'contact', component: Contact },


  
  
]


const router = createRouter({
  history: createWebHistory(),
  routes, 

})


export default router

