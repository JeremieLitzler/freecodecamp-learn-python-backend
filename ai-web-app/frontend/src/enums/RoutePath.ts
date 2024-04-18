export enum RoutePath {
  //Public pages
  TheHome = '/',

  BlogIndex = '/blog',
  BlogDetails = '/blog/:id',

  UserRegister = '/register',
  UserLogin = '/login',
  UserLogout = '/logout',
  //Commun page
  NotAuthorized = '/unauthorized',
  NotFound = '/:patchMatch(.*)*',
}
