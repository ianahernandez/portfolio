import Vue from 'vue';
import VueRouter from 'vue-router';
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
import Portfolio from "../views/Portfolio.vue";
import Resume from "../views/Resume.vue";

Vue.use(VueRouter)


const routes = [
  {
    path: "",
    component: () => import("../layouts/main/Main.vue"),
    children: [
      {
        path: '/sobre-mi',
        name: 'about',
        component: About
      },
      {
        path: '/resumen',
        name: 'resume',
        component: Resume
      },
      {
        path: '/portafolio',
        name: 'portfolio',
        component: Portfolio
      },
      {
        path: '/blog',
        name: 'blog',
        component: Blog
      },
      {
        path: '/contacto',
        name: 'contact',
        component: Contact
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
