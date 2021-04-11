import React from 'react';

import SORT_STATUS from '../logic/sortStatus';

// style
import s from './ControlPanel.module.scss';

interface ControlPanelProps {
  status: SORT_STATUS;
  inputValue: number;
  onClickControl: React.MouseEventHandler<HTMLButtonElement>;
  onClickReset: React.MouseEventHandler<HTMLButtonElement>;
  onChangeLength(e: React.ChangeEvent<HTMLInputElement>) : void ;
  onClickManually: React.MouseEventHandler<HTMLButtonElement>;
}

const ControlPanel = ({
  status,
  inputValue,
  onClickControl,
  onClickReset,
  onChangeLength,
  onClickManually
}: React.PropsWithChildren<ControlPanelProps>): JSX.Element => {

  const controlButtonName = status === SORT_STATUS.sorting ? "Pause" : "Start";
  const controlButtonDisabled = status === SORT_STATUS.finish ? true : false;
  const manuallyButtonDisable = ( status === SORT_STATUS.start || status === SORT_STATUS.pause) ? false : true;

  return (
    <div className={s.panel}>
      <div className={s.status}>{status}</div>
      <div className={s.buttons_container}>
        <button type="button" className={s.button} onClick={onClickReset}>
          New Set
        </button>
        <button
          type="button"
          className={s.button}
          onClick={onClickControl}
          disabled={controlButtonDisabled}
        >
          {controlButtonName}
        </button>
        <button type="button" className={s.button} onClick={onClickManually} disabled={manuallyButtonDisable}>
          Manually
        </button>
      </div>
      <label>
        Interval from 3 to 80:
        <input className={s.input} value={inputValue} type="number" min="3" max="80" onChange={onChangeLength} />
      </label>
    </div>
  );
};

export default ControlPanel;
