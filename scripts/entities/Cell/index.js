import { createElement } from "../../utils/index.js";

export default class Cell {
  constructor(element, position, tile) {
    let _position = position;
    let _tile = tile;
	let _element = element;

    this.getPosition = function () {
      return _position;
    };

    this.setPosition = function (position) {
		_position = position;
    };

    this.getTile = function () {
      return _tile;
    };

    this.setTile = function (tile) {
		_tile = tile;
		tile.setPosition(_position);
    };

	this.destroyTile = function() {
		_tile.destroy();
		// try delete()
	}

  }

  reset() {
	  this.setTile(undefined)
  }
}
