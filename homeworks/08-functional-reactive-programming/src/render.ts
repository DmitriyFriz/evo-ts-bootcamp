interface CellPosition {
  top: number;
  left: number;
}

export const aimDomNode = document.getElementById('aim')!;
const boarDomNode = document.getElementById('board')!;
const runDomNode = document.getElementById('run')!;
const catchDomNode = document.getElementById('catch')!;

const cellPositions: CellPosition[] = [
  { top: 70, left: 70 },
  { top: 140, left: 155 },
  { top: 425, left: 145 },
  { top: 270, left: 250 },
  { top: 390, left: 370 },
  { top: 110, left: 390 },
  { top: 250, left: 445 },
  { top: 145, left: 275 },
  { top: 440, left: 270 },
];

const createCell = ({ top, left }: CellPosition): HTMLDivElement => {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.style.top = `${top}px`;
  cell.style.left = `${left}px`;
  return cell;
};

export const renderLayout = () => {
  const layout = cellPositions.map((position) => createCell(position));
  boarDomNode.append(...layout);
};

export const randomRenderAim = () => {
  const randomCellPosition = Math.round(Math.random() * (cellPositions.length - 1));
  const { top, left } = cellPositions[randomCellPosition];
  aimDomNode.style.top = `${top}px`;
  aimDomNode.style.left = `${left}px`;
};

export const updateRunScore = (score: number) => {
  runDomNode.textContent = `${score}`;
};

export const updateCatchScore = (score: number) => {
  catchDomNode.textContent = `${score}`;
};
