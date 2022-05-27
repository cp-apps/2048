import { Grid } from "./entities/index.js";
import { selectElement } from "./utils/index.js";
import { CSSSelectors } from "./constants/index.js";

const grid = new Grid(selectElement(CSSSelectors.BOARD));

const gridCells = grid.getCells();



grid.getCells().forEach(cell => console.log(((cell.getPosition()).getX())))