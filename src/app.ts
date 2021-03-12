import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router): Promise<void> | PromiseLike<void> | void {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: true,
        title: 'Welcome'
      },
      {
        route: 'testhttp',
        name: 'testhttp',
        moduleId: PLATFORM.moduleName('./testhttp'),
        nav: true,
        title: 'Testhttp'
      },
      {
        route: 'studentlist',
        name: 'studentlist',
        moduleId: PLATFORM.moduleName('./studentlist'),
        nav: true,
        title: 'Add student'
      },
      {
        route: 'ListAllStudent',
        name: 'ListAllStudent',
        moduleId: PLATFORM.moduleName('./ListAllStudent'),
        nav: true,
        title: 'ListAllStudent'
      },
      

      {
        route: 'ListAllApi',
        name: 'ListAllApi',
        moduleId: PLATFORM.moduleName('./ListAllApi'),
        nav: true,
        title: 'ListAllApi'
      },
      {
        route: 'StudentlistApi',
        name: 'StudentlistApi',
        moduleId: PLATFORM.moduleName('./StudentlistApi'),
        nav: true,
        title: 'StudentlistApi'
      },
      {
        route: 'Listapi2',
        name: 'Listapi2',
        moduleId: PLATFORM.moduleName('./Listapi2'),
        nav: true,
        title: 'Listapi2'
      }

      //{
      //  route: 'users',
      //  name: 'users',
      //  moduleId: PLATFORM.moduleName('./users'),
      //  nav: true,
      //  title: 'Github Users'
      //},
      //{
      //  route: 'child-router',
      //  name: 'child-router',
      //  moduleId: PLATFORM.moduleName('./child-router'),
      //  nav: true,
      //  title: 'Child Router'
      //}
    ]);

    this.router = router;
  }
}
