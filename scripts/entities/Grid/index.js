import Cell from "../Cell/index.js";
import { selectElements, setCssProps, getConfigs } from "../../utils/index.js";


export default class Grid {
  // We choose to not use the recent JS-private
  // syntaxe to avoid browsers support problems.

  constructor($element) {
    let _cells = [];
    if (!$element) return;

    _cells = Array.from($element.children);

    console.log("getConfigs() => ", getConfigs())

    setCssProps.call($element, getConfigs());

    this.getCells = function () {
      return _cells;
    };

    this.setCells = function (cells) {
      _cells = cells;
    };
  }
}
