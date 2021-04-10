import React from 'react';

import Cell from '../Cell';

// style
import s from './Field.module.scss';

interface FieldProps {
  arr: number[];
}

const Field = ({arr} :  React.PropsWithChildren<FieldProps>): JSX.Element => {

  const maxValue = Math.max(...arr);

  console.log(maxValue);

  const cells = arr.map((value, index) => <Cell key={index} height={(value / maxValue) * 100}/>);

  return <div className={s.field}>{cells}</div>;
}

export default Field;
