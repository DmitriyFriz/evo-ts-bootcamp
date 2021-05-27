interface Cell {
  top: number;
  left: number;
}

const boarDomNode = document.getElementById('board')!;
const aimDomNode = document.getElementById('aim')!;

const positions: Cell[] = [
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

const createCell = ({ top, left }: Cell): HTMLDivElement => {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.style.top = `${top}px`;
  cell.style.left = `${left}px`;
  return cell;
};

export const renderLayout = () => {
  const layout = positions.map((position) => createCell(position));
  boarDomNode.append(...layout);
};
