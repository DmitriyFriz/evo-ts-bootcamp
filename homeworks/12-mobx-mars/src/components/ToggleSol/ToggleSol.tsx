import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/storeMobX';

// style
import s from './ToggleSol.module.scss';

export const ToggleSol = observer(() => {
  const marsStore = useStore('marsStore');

  return (
    <input
      className={s.input}
      value={marsStore.selectedSol}
      type="number"
      min="1"
      onChange={(e) => marsStore.changeSol(+e.target.value)}
    />
  );
});
