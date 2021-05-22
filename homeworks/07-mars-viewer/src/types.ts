export interface Photo {
  id: number;
  imgSrc: string;
  roverName: RoverName;
  cameraName: string;
}

export interface Sols {
  [key: number]: Photo[];
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
