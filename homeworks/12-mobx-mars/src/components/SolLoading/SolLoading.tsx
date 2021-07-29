import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/storeMobX';

// style
import s from './SolLoading.module.scss';

export const SolLoading = observer(() => {
  const loadingController = useRef<AbortController | null>(null);
  const marsStore = useStore('marsStore');

  useEffect(() => {
    if (loadingController.current) {
      loadingController.current.abort();
    }
  }, [marsStore.selectedSol, marsStore.selectedRover]);

  return (
    <button
      className={s.button}
      type="button"
      onClick={() => {
        const controller = new AbortController();
        loadingController.current = controller;
        marsStore.loadSol(controller.signal);
      }}
    >
      load
    </button>
  );
});
