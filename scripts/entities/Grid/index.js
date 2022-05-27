import { Cell } from "../../entities/index.js";
import { setCssProps, CssConfigs } from "../../utils/index.js";
import Position from "../Position/index.js";
import { GRID_DIM } from "../../configs/index.js";

export default class Grid {
  constructor(element) {
    if (!element) return;

    setCssProps.call(element, CssConfigs);

    let _element = element;

    let _cells = Array.from(element.children, (childElement, childIndex) => {
      // Note that with $x and $y as the cell position on
      // the board, " $childIndex = $y * $GRID_DIM + $x ".
      const childPosition = new Position(
        childIndex % GRID_DIM,
        Math.floor(childIndex / GRID_DIM)
      );
      return new Cell(childElement, childPosition);
    });

    this.getElement = function() {
        return _element;
    }

    this.getCells = function () {
      return _cells;
    };

    this.setCells = function (cells) {
      _cells = cells;
    };

    this.resetCells = function() {
        _cells.forEach((cell) => cell.reset())
    };

    this.getEmptyCells = function() {
        return _cells.filter((cell) => cell.getTile() == null)
    };

  }

  getRandomCell() {
    const emptyCells = this.getEmptyCells();
    return emptyCells[Math.floor(Math.random() * emptyCells.length)]
  };

}
