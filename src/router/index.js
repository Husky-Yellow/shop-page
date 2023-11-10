import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// fix：重复路径跳转报错
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};

export const routeNames = [
  {
      title: '首页',
      link: 'index',
  },
  {
      title: '详情',
      link: 'detail',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes: routeNames.map(item => ({
    path: `/${item.link}`,
    name: item.link,
    component: () => import(`../views/${item.link}.vue`),
  })),
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/index')
  } else next()
});

export default router;
