import { Grid } from "./entities/index.js";
import { selectElement, initGame } from "./utils/index.js";
import { CSSSelectors } from "./constants/index.js";

const grid = new Grid(selectElement(CSSSelectors.BOARD));

initGame(grid)

// const gridCells = grid.getCells();



