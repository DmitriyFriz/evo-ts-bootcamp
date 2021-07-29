import { makeAutoObservable, action } from 'mobx';
import { RouteName } from '../types';

export class RouteStore {
  route: RouteName = RouteName.Photos;

  constructor() {
    makeAutoObservable(this, {
      changeRoute: action.bound,
    });
  }

  changeRoute(route: RouteName) {
    this.route = route;
  }
}
