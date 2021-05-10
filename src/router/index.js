import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)


const routes = [
  {
    path: "",
    component: () => import("../layouts/main/Main.vue"),
    children: [
      {
        path: '/',
        name: "Inicio",
        redirect: '/sobre-mi',
      },
      {
        path: '/sobre-mi',
        name: 'about',
        component: () => import("@/views/About.vue"),
      },
      {
        path: '/resumen',
        name: 'resume',
        component: () => import("@/views/Resume.vue"),
      },
      {
        path: '/portafolio',
        name: 'portfolio',
        component: () => import("@/views/Portfolio.vue"),
      },
      {
        path: '/blog',
        name: 'blog',
        component: () => import("@/views/Blog.vue"),
      },
      {
        path: '/blog/:slug',
        name: 'post',
        component: () => import("@/views/Post.vue"),
      },
      {
        path: '/contacto',
        name: 'contact',
        component: () => import("@/views/Contact.vue"),
      },
      {
        path: '*',
        name: 'notFound',
        component: () => import("@/views/404.vue"),
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
