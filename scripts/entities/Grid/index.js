import { Cell } from "../../entities/index.js";
import { setCssProps, CssConfigs, getCoordinates } from "../../utils/index.js";
import Position from "../Position/index.js";
import { GRID_DIM } from "../../configs/index.js";

export default class Grid {
  constructor(element) {
    if (!element) return;

    setCssProps.call(element, CssConfigs);

    let _element = element;

    let _cells = Array.from(element.children, (childElement, childIndex) => {

      const childPosition = new Position(
        ...Object.values(getCoordinates(childIndex))
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

  getRandomEmptyCell() {
    const emptyCells = this.getEmptyCells();

    console.log("emptyCells => ", emptyCells)
    const r = Math.floor(Math.random() * emptyCells.length)
    console.log('r => ', r)
    console.log('r => ', getCoordinates(r))
    return emptyCells[r]
  };

}
