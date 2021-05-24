import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectPhotos, selectLoadingStatus, selectError } from '../../store/mars/selectors';
import { ControlPanel } from '../ControlPanel';
import { Gallery } from '../Gallery';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { PhrasePhotosPage, LoadingStatus } from '../../types';

export const PhotosPage = () => {
  const photos = useAppSelector(selectPhotos);
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const error = useAppSelector(selectError);

  return (
    <>
      <ControlPanel />
      {loadingStatus === LoadingStatus.Pending && <Loader />}
      {error && <ErrorMessage message={error} />}
      {loadingStatus === LoadingStatus.Idle && !error && (
        <Gallery
          photos={photos}
          undefinedPhrase={PhrasePhotosPage.undefined}
          emptyPhrase={PhrasePhotosPage.empty}
        />
      )}
    </>
  );
};
