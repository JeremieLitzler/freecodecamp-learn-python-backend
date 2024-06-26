import { createRouter, createWebHistory } from 'vue-router';
import type {
  RouteRecordRaw,
  Router,
  RouterOptions,
  RouterScrollBehavior,
} from 'vue-router';
import TheHome from '@/pages/TheHome.vue';
import { RouteName } from '@/enums/RouteName';
import { RoutePath } from '@/enums/RoutePath';
import { useAuth } from '@/composables/useAuth';

const HomeRoute: RouteRecordRaw = {
  path: '/',
  name: RouteName.TheHome,
  component: TheHome,
};

const BlogIndexRoute: RouteRecordRaw = {
  path: RoutePath.BlogIndex,
  name: RouteName.BlogIndex,
  component: () => import('@/pages/BlogIndex.vue'),
  meta: { requestAuth: true },
};
const BlogDetailsRoute: RouteRecordRaw = {
  path: RoutePath.BlogDetails,
  name: RouteName.BlogDetails,
  component: () => import('@/pages/BlogDetails.vue'),
  props: true,
  meta: { requestAuth: true },
};

const UserRegisterRoute: RouteRecordRaw = {
  path: RoutePath.UserRegister,
  name: RouteName.UserRegister,
  component: () => import('@/pages/UserRegister.vue'),
  meta: { requiresGuest: true },
};

const UserLoginRoute: RouteRecordRaw = {
  path: RoutePath.UserLogin,
  name: RouteName.UserLogin,
  component: () => import('@/pages/UserLogin.vue'),
  //   meta: { requiresGuest: true },
};

const UserLogoutRoute: RouteRecordRaw = {
  path: RoutePath.UserLogout,
  name: RouteName.UserLogout,
  redirect: '',
  beforeEnter: async (_to, _from, next) => {
    useAuth().authenticate(null);
    next({ name: RouteName.TheHome });
  },
};
const NotAuthorizedRoute: RouteRecordRaw = {
  path: RoutePath.NotAuthorized,
  name: RouteName.NotAuthorized,
  component: () => import('@/pages/NotAuthorized.vue'),
};
const NotFoundRoute: RouteRecordRaw = {
  path: RoutePath.NotFound,
  name: RouteName.NotFound,
  component: () => import('@/pages/NotFound.vue'),
};
/**
 * Defines the "scroll to top behavior"
 * @param to The destination route
 * @returns A promise
 */
const scrollBehaviorGuard: RouterScrollBehavior = (to) => {
  const scrollBehavior:
    | { top?: number; behavior?: ScrollBehavior }
    | undefined = {};

  if (to.meta.toTop) scrollBehavior.top = 0;
  if (to.meta.smoothScroll) scrollBehavior.behavior = 'smooth';

  return new Promise((resolve) => {
    setTimeout(() => resolve(scrollBehavior), 500);
  });
};

const routerOptions: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    HomeRoute,
    BlogIndexRoute,
    BlogDetailsRoute,
    UserRegisterRoute,
    UserLoginRoute,
    UserLogoutRoute,
    NotAuthorizedRoute,
    NotFoundRoute,
  ],
  scrollBehavior: scrollBehaviorGuard,
};

const router: Router = createRouter(routerOptions);

router.beforeEach(async (to, _from) => {
  if (to.meta.requestAuth && !useAuth().isLoggedIn.value) {
    return {
      name: RouteName.UserLogin,
      query: { redirectTo: to.fullPath },
      hash: to.hash,
    };
  }
  //continue since user is authorized
});
export default router;
