import { Cell } from "../../entities/index.js";
import { setCssProps, CssConfigs } from "../../utils/index.js";
import Position from "../Position/index.js";
import { GRID_DIM } from "../../configs/index.js";

export default class Grid {
  constructor(element) {
    if (!element) return;

    let _cells = Array.from(element.children, (childElement, childIndex) => {
      // Note that " $childIndex = $y * $GRID_DIM + $x ".
      // Where $x and $y are the coordinates of the
      // corresponding point on the game board.
      const childPosition = new Position(
        childIndex % GRID_DIM,
        Math.floor(childIndex / GRID_DIM)
      );
      return new Cell(childElement, childPosition);
    });

    setCssProps.call(element, CssConfigs);

    this.getCells = function () {
      return _cells;
    };

    this.setCells = function (cells) {
      _cells = cells;
    };
  }
}
