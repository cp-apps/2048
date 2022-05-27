import Position from "../../entities/Position/index.js";
import { removeElement, createElement, setCssProp } from "../../utils/index.js";
import { CssClasses, CustomCssProperties } from "../../constants/index.js";

export default class Tile {
  constructor(container, value) {
    let _position;
    let _element = container.appendChild(createElement());

    _element.classList.add(CssClasses.TILE);
    _element.textContent = value;

    this.getPosition = function () {
      return _position;
    };

    this.setPosition = function (position) {
      _position = position;
      setCssProp.call(_element, CustomCssProperties.X, _position.getX());
      setCssProp.call(_element, CustomCssProperties.Y, _position.getY());
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
