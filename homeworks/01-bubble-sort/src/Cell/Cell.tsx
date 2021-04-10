import React from 'react';

// style
import s from './Cell.module.scss';

interface CellProps {
  height: number;
}

const Cell = ({height}: React.PropsWithChildren<CellProps>): JSX.Element => {

  return <div className={s.cell} style={{height: `${height}%`}} />
}

export default Cell;
