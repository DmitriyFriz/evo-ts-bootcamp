export interface Photo {
  id: number;
  imgSrc: string;
  roverName: RoverName;
  cameraName: string;
}

export interface Sols {
  [key: string]: Photo[];
}

export enum LoadingStatus {
  Idle = 'idle',
  Pending = 'pending',
}

export enum RoverName {
  Perseverance = 'perseverance',
  Curiosity = 'curiosity',
  Opportunity = 'opportunity',
  Spirit = 'spirit',
}

export enum RouteName {
  Photos = 'photos',
  Favourites = 'favourites',
}

export enum PhrasePhotosPage {
  undefined = 'Photos are not loaded',
  empty = 'No photos for this sol :(',
}

export enum PhraseFavouritesPage {
  undefined = 'Photos are not loaded',
  empty = 'No favourites photos',
}

export type Rovers = {
  [key in RoverName]?: Sols;
};
