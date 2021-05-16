import { Photo } from '../types';

const apiKey = 'hhBxTg2buuk5Fw4ysiY2Esz2nC12syXcbscxECMh';
const marsRoverURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
const roverName = 'perseverance';

interface Camera {
  // eslint-disable-next-line
  full_name: string;
}

interface Rover {
  name: string;
}

interface PhotoAPI {
  id: number;
  camera: Camera;
  // eslint-disable-next-line
  img_src: string;
  rover: Rover;
}

export async function getMarsRoverPhotos(sol: number): Promise<Photo[]> {
  const url = `${marsRoverURL}/${roverName}/photos?sol=${sol}&api_key=${apiKey}`;

  const response = await fetch(url);
  const json = await response.json();

  if (response.status !== 200) {
    throw new Error(json.error.message);
  }

  const photosAPI: PhotoAPI[] = json.photos;
  const photos = photosAPI.map((item) => ({
    id: item.id,
    imgSrc: item.img_src,
    roverName: item.rover.name,
    cameraName: item.camera.full_name,
  }));

  return photos;
}
