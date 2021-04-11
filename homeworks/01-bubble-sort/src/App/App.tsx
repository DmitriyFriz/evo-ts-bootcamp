import React from 'react';

import Field from '../Field';
import ControlPanel from '../ControlPanel';
import getRandomArr from '../logic/randomArr';
import SORT_STATUS from '../logic/sortStatus';
import bubbleSortStep from '../logic/bubbleSort';

// style
import s from './App.module.scss';

interface AppState {
  length: number;
  arr: number[];
  status: SORT_STATUS,
}


class App extends React.Component<{}, AppState> {
  private intervalID?: ReturnType<typeof setInterval>;

  constructor(props: {}) {
    super(props);
    this.state = {
      length: 20,
      arr: [],
      status: SORT_STATUS.start
    }
  }

  componentDidMount(): void {
    this.setState(({ length }) => ({ arr: getRandomArr(length) }));
  }

  componentDidUpdate(prevProps: {}, prevState: AppState): void {
    if (this.state.status !== prevState.status) {
      switch (this.state.status) {
        case SORT_STATUS.start:
          this.removeInterval();
          this.setState(({ length }) => ({ arr: getRandomArr(length) }));
          break;
        case SORT_STATUS.sorting:
          this.intervalID = setInterval(this.getSortStep, 100);
          break;
        case SORT_STATUS.pause:
        case SORT_STATUS.finish:
          this.removeInterval();
          break;
        default:
          break;
      }
    }
  }

  componentWillUnmount(): void {
    this.removeInterval();
  }

  private removeInterval(): void {
    if (this.intervalID) {
      clearInterval(this.intervalID)
    }
  }

  private handleClickControl: React.MouseEventHandler<HTMLButtonElement> = () => {
    switch (this.state.status) {
      case SORT_STATUS.start:
        this.setState({ status: SORT_STATUS.sorting });
        break;
      case SORT_STATUS.sorting:
        this.setState({ status: SORT_STATUS.pause });
        break;
      case SORT_STATUS.pause:
        this.setState({ status: SORT_STATUS.sorting });
        break;
      default:
        break;
    }
  }

  private handleClickReset: React.MouseEventHandler<HTMLButtonElement> = () => {
    this.setState({ status: SORT_STATUS.start });
  }

  private getSortStep = (): any => {
    /*
      Please, give me some recommendations. Should I use function form of setState below or use simple form setState?
      I used function form because newArr depended on previous arr state and function getSortStep is used in setInterval.
     */
    this.setState(({ arr, status }) => {
      const copyArr = [...arr];
      const { newArr, isSorted } = bubbleSortStep(copyArr);
      if (isSorted) {
        return { status: SORT_STATUS.finish, arr };
      } else {
        return { status, arr: newArr };
      }
    })
  }

  render() {
    const { arr, status } = this.state;

    return (
      <div className={s.container}>
        <h1>Bubble sort </h1>
        <Field arr={arr} />
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
