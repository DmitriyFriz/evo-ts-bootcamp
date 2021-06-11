import { makeAutoObservable, action, flow } from 'mobx';
import { LoadingStatus, RoverName, Sols, Photo } from '../types';
import { getMarsRoverPhotos } from '../services/marsRover';

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
      loadSol: flow.bound,
    });
  }

  changeSol(sol: number) {
    this.selectedSol = sol;
  }

  changeRover(rover: RoverName) {
    this.selectedRover = rover;
  }

  *loadSol(signal: AbortSignal) {
    if (this.photos !== undefined) {
      return;
    }

    this.loading = LoadingStatus.Pending;
    this.error = null;
    const sol = this.selectedSol;
    const rover = this.selectedRover;

    try {
      const loadedPhotos: Photo[] = yield getMarsRoverPhotos(sol, rover, signal);

      const currentRover = this.rovers[rover];
      if (currentRover === undefined) {
        this.rovers[rover] = {
          [sol]: loadedPhotos,
        };
      } else {
        currentRover[sol] = loadedPhotos;
      }

      console.log(this.rovers, sol, rover);
    } catch (err) {
      if (err.name !== 'AbortError') {
        this.error = err || 'unknown error';
      }
    } finally {
      this.loading = LoadingStatus.Idle;
    }
  }

  get photos() {
    const currentRover = this.rovers[this.selectedRover];
    return currentRover ? currentRover[this.selectedSol] : undefined;
  }
}
