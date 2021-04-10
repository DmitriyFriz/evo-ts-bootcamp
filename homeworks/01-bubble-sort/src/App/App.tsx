import React from 'react';

import Field from '../Field';
import getRandomArr from '../logic/randomArr';

// style
import s from './App.module.scss';

interface AppState {
  length: number;
  arr: number[];
  isSorting: boolean;
}


class App extends React.Component<{}, AppState> {
  constructor(props: {}){
    super(props);
    this.state = {
      length: 100,
      arr: [],
      isSorting: false,
    }
  }


  componentDidMount() {
    this.setState(({length}) => ({arr: getRandomArr(length)}));
  }

  componentDidUpdate() {
    console.log('update');
  }


  render() {
    const { arr } = this.state;

    console.log(arr);

    return (
      <div className={s.container}>
        <h1>Bubble sort </h1>
        <Field arr={arr}/>
      </div>
    );
  }
}

export default App;
