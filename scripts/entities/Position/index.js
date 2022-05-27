export default class Position {
    constructor(point) {
        let _point = point;

        this.setPoint = function(point) {
            _point = point;
        };

        this.getPoint = function() {
            return _point;
        }
    }
};