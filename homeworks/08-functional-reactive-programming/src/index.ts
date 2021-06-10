import { timer, fromEvent, merge } from 'rxjs';
import { mapTo, tap, scan, pairwise, filter } from 'rxjs/operators';
import {
  renderLayout,
  randomRenderAim,
  aimDomNode,
  updateCatchScore,
  updateRunScore,
} from './render';

// styles
import './index.css';

renderLayout();

const interval$ = timer(0, 900).pipe(tap(randomRenderAim), mapTo(true));

const clickOnAim$ = fromEvent(aimDomNode, 'click').pipe(
  scan((catchAcc) => catchAcc + 1, 0),
  tap(updateCatchScore),
  mapTo(false)
);

const game$ = merge(interval$, clickOnAim$)
  .pipe(
    pairwise(),
    filter(([previousRun, currentRun]) => previousRun && currentRun),
    scan((runAcc) => runAcc + 1, 0),
    tap(updateRunScore)
  )
  .subscribe();
