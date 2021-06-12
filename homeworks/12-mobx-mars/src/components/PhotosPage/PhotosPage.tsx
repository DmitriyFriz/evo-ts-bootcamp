import React from 'react';
import { observer } from 'mobx-react-lite';
import { ControlPanel } from '../ControlPanel';
import { Gallery } from '../Gallery';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { PhrasePhotosPage, LoadingStatus } from '../../types';
import { useStore } from '../../store/storeMobX';

export const PhotosPage = observer(() => {
  const marsStore = useStore('marsStore');

  return (
    <>
      <ControlPanel />
      {marsStore.loading === LoadingStatus.Pending && <Loader />}
      {marsStore.error && <ErrorMessage message={marsStore.error} />}
      {marsStore.loading === LoadingStatus.Idle && !marsStore.error && (
        <Gallery
          photos={marsStore.photos}
          undefinedPhrase={PhrasePhotosPage.undefined}
          emptyPhrase={PhrasePhotosPage.empty}
        />
      )}
    </>
  );
});
