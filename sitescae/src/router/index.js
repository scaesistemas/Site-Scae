import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
import Missing from "../views/404.vue";
 
Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Scae",
    meta: { 
      title: "SCAE",
    },
    component: () => import("../views/home/Scae.vue"),
  },
  {
    path: "/contact",
    name: "Contato",
    meta: {
      title: "Contato",
    },
    component: () => import("../views/Contato.vue"),
  },
  {
    path: "*",
    component: Missing,
    meta: {
      title: "Erro 404",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
