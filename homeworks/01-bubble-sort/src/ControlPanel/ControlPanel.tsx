import React from 'react';

import SORT_STATUS from '../logic/sortStatus';

// style
import s from './ControlPanel.module.scss';

interface ControlPanelProps {
  status: SORT_STATUS;
  onClickControl: React.MouseEventHandler<HTMLButtonElement>;
  onClickReset: React.MouseEventHandler<HTMLButtonElement>;
}

const ControlPanel = ({
  status,
  onClickControl,
  onClickReset,
}: React.PropsWithChildren<ControlPanelProps>): JSX.Element => {

  const controlButtonName = status === SORT_STATUS.sorting ? "pause" : "start";
  const controlButtonDisabled = status === SORT_STATUS.finish ? true : false;

  return (
    <div className={s.panel}>
      <div>{status}</div>
      <div className={s.buttons_container}>
        <button type="button" className={s.button} onClick={onClickReset}>
          new Set
        </button>
        <button
          type="button"
          className={s.button}
          onClick={onClickControl}
          disabled={controlButtonDisabled}
        >
          {controlButtonName}
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
