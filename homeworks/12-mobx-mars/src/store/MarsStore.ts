import { makeAutoObservable, action } from 'mobx';
import { LoadingStatus, RoverName, Sols, Photo } from '../types';

type Rovers = {
  [key in RoverName]?: Sols;
};

export class MarsStore {
  loading: LoadingStatus = LoadingStatus.Idle;
  error: null | string = null;
  selectedSol: number = 1;
  selectedRover: RoverName = RoverName.Perseverance;
  rovers: Rovers = {};

  constructor() {
    makeAutoObservable(this, {
      changeSol: action.bound,
      changeRover: action.bound,
    });
  }

  changeSol(sol: number) {
    this.selectedSol = sol;
  }

  changeRover(rover: RoverName) {
    this.selectedRover = rover;
  }
}
