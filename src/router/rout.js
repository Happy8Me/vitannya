import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Contacts from '../views/Contacts.vue'
import CV from '../views/CV.vue'
import Certificates from '../views/Certificates.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/contacts', component: Contacts },
    { path: '/', component: Home },
    { path: '/cv', component: CV },
    { path: '/certificates', component: Certificates },
  ];
  
  
  const router = new VueRouter({
    routes 
  });

  export default router;