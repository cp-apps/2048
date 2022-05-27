export default class Cell {
  constructor($element, position, tile) {
    let _position = position;
    let _tile = tile;
    let _$element = $element;

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
    };
  }
}
