import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';

export class ChildRouter {
  public heading = 'Child Router';
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router): Promise<void> | PromiseLike<void> | void {
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: true,
        title: 'Welcome'
      },
      {
        route: 'users',
        name: 'users',
        moduleId: PLATFORM.moduleName('./users'),
        nav: true,
        title: 'Github Users'
      },
      {
        route: 'child-router',
        name: 'child-router',
        moduleId: PLATFORM.moduleName('./child-router'),
        nav: true,
        title: 'Child Router'
      }
    ]);

    this.router = router;
  }
}
