import React from 'react';

import Field from '../Field';
import ControlPanel from '../ControlPanel';
import getRandomArr from '../logic/randomArr';
import SORT_STATUS from '../logic/sortStatus';

// style
import s from './App.module.scss';

interface AppState {
  length: number;
  arr: number[];
  status: SORT_STATUS
}


class App extends React.Component<{}, AppState> {
  constructor(props: {}){
    super(props);
    this.state = {
      length: 30,
      arr: [],
      status: SORT_STATUS.start
    }
  }


  componentDidMount(): void {
    this.setState(({length}) => ({arr: getRandomArr(length)}));
  }

  componentDidUpdate(): void {
    console.log('update');
  }

  private handleClickControl: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log('control');
  }

  private handleClickReset: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log('reset');
  }


  render() {
    const { arr, status } = this.state;

    console.log(arr);

    return (
      <div className={s.container}>
        <h1>Bubble sort </h1>
        <Field arr={arr}/>
        <ControlPanel
          status={status}
          onClickControl={this.handleClickControl}
          onClickReset={this.handleClickReset}
        />
      </div>
    );
  }
}

export default App;
