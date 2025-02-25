export default class Router {
  constructor(initialRoute) {
    this.routes = {};
    this.currentRoute = initialRoute;
  }

  on(route, callback) {
    this.routes[route] = callback;
  }

  navigate(route) {
    window.location.hash = route;
  }

  resolve() {
    const route = window.location.hash.slice(1) || '/';
    const callback = this.routes[route] || this.routes['/'];
    callback();
  }
}
