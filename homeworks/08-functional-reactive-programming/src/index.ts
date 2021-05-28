import { timer, fromEvent, merge } from 'rxjs';
import { mapTo, tap, scan, pairwise, filter } from 'rxjs/operators';
import { renderLayout, randomRenderAim, aimDomNode } from './render';

// styles
import './index.css';

renderLayout();

const interval$ = timer(0, 3000).pipe(tap(randomRenderAim), mapTo(true));

const clickOnAim$ = fromEvent(aimDomNode, 'click').pipe(
  scan((catchAcc) => catchAcc + 1, 0),
  tap(print),
  mapTo(false)
);

const game$ = merge(interval$, clickOnAim$)
  .pipe(
    pairwise(),
    filter(([previousRun, currentRun]) => previousRun && currentRun),
    scan((runAcc) => runAcc + 1, 0)
  )
  .subscribe((val) => console.log('run:', val));

function print(val: any) {
  console.log(val);
}
