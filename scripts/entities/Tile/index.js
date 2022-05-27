import Position from "../../entities/Position/index.js";
import { removeElement } from "../../utils/index.js";

export default class Tile {
    constructor(container, position, value) {
        let _position = position
        let _element = container.appendChild(
            createElement("div").classList.add('.tile')
        );

        this.getPosition = function () {
            return _position;
        };

        this.setPosition = function (position) {
            _position = position;
        };
        
        // Kinda two-ways binding for $_value
        this.setValue = function(value) {
            _element.textContent = value;

            // TODO: Background color and text light
        };
    
        this.getValue = function () {
            return _element.textContent;
        };

        this.destroy = function() {
            removeElement(_element);
        };
    }


};

