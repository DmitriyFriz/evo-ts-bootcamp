import { makeAutoObservable } from 'mobx';
import { Photo, RoverName, Rovers } from '../types';

interface EntityStore {
  rovers: Rovers;
}

export class FavouritesStore {
  favourites: number[] = [];

  constructor(private marsStore: EntityStore) {
    makeAutoObservable(this);
  }

  interactLike(id: number) {
    const index = this.favourites.indexOf(id);

    if (index === -1) {
      this.favourites.push(id);
    } else {
      this.favourites.splice(index, 1);
    }
  }

  get favouritesPhotos() {
    const allPhotos: Photo[] = [];

    const { rovers } = this.marsStore;

    for (const roverKey in rovers) {
      if (Object.prototype.hasOwnProperty.call(rovers, roverKey)) {
        const rover = rovers[roverKey as RoverName];
        for (const solKey in rover) {
          if (Object.prototype.hasOwnProperty.call(rover, solKey)) {
            allPhotos.push(...rover[solKey]);
          }
        }
      }
    }

    return this.favourites.map(
      (favouriteId) => allPhotos.find(({ id }) => id === favouriteId) as Photo
    );
  }
}
