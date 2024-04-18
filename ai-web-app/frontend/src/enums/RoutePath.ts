export enum RoutePath {
  //Public pages
  TheHome = '/',
  UserRegister = '/register',
  UserLogin = '/login',
  UserLogout = '/logout',
  //Commun page
  NotAuthorized = '/unauthorized',
  NotFound = '/:patchMatch(.*)*',
}
