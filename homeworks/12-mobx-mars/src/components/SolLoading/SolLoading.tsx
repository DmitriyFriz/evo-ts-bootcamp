import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectSelectedSol, selectSelectedRover } from '../../store/mars/selectors';
import { fetchSol } from '../../store/mars/marsSlice';

// style
import s from './SolLoading.module.scss';

interface LoadingController {
  abort(): void;
}

export const SolLoading = () => {
  const dispatch = useAppDispatch();
  const selectedSol = useAppSelector(selectSelectedSol);
  const selectedRover = useAppSelector(selectSelectedRover);

  const loadingController = useRef<LoadingController | null>(null);

  useEffect(() => {
    if (loadingController.current) {
      loadingController.current.abort();
    }
  }, [selectedSol, selectedRover]);

  return (
    <button
      className={s.button}
      type="button"
      onClick={() => {
        loadingController.current = dispatch(fetchSol());
      }}
    >
      load
    </button>
  );
};
