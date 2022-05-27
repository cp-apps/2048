import Position from "../../entities/Position/index.js";
import { removeElement, createElement } from "../../utils/index.js";

export default class Tile {
  constructor(container, value) {
    let _position;
    let _element = container.appendChild(createElement("div"));

    _element.classList.add("tile");
    _element.textContent = value;

    this.getPosition = function () {
      return _position;
    };

    this.setPosition = function (position) {
      _position = position;
    };

    // Kinda two-ways binding for $_value
    this.setValue = function (value) {
      _element.textContent = value;

      // TODO: Background color and text light
    };

    this.getValue = function () {
      return _element.textContent;
    };

    this.destroy = function () {
      removeElement(_element);
    };
  }
}
