export default class Position {
    constructor(x, y) {
        let _x = x;
        let _y = y;
    
        this.getX = function () {
          return _x;
        };
        this.setX = function (x) {
          _x = x;
          return this;
        };
    
        this.getX = function () {
          return _x;
        };
    
        this.setY = function (y) {
          _y = y;
          return this;
        };
    }
};