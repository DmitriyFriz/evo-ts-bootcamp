import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectPhotos } from '../../store/mars/selectors';
import { ControlPanel } from '../ControlPanel';
import { Gallery } from '../Gallery';
import { PhrasePhotosPage } from '../../types';

export const PhotosPage = () => {
  const photos = useAppSelector(selectPhotos);
  return (
    <>
      <ControlPanel />
      <Gallery
        photos={photos}
        undefinedPhrase={PhrasePhotosPage.undefined}
        emptyPhrase={PhrasePhotosPage.empty}
      />
    </>
  );
};
