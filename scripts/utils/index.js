import { CustomCssProperties } from "../constants/index.js";
import * as GridConfigs from "../configs/index.js";
import { Tile } from "../entities/index.js";

export const selectElement = (selector) => document.querySelector(selector);
export const selectElements = (selector) => document.querySelectorAll(selector);

export const createElement = (elementTagName="div", options) => document.createElement(elementTagName, options);
export const removeElement = (element) => element.remove();

export const setCssProp = function (propertyName, propertyValue) {
  // Function expression in other to reference the real caller of the
  // function in its logic. We don't want to pass to node explicitly.
  // The caller should rebind. As the default context is window.
  this.style.setProperty(propertyName, propertyValue);
};

export const setCssProps = function (propsObject) {
  Object.entries(propsObject).forEach((propEntry) =>
    setCssProp.call(this, propEntry[0], propEntry[1])
  );
};


export const Mixin = (SuperClass) => class extends SuperClass {};

export const CssConfigs = (() => {
  // Automatically overwrite the default css configs by overwritting
  // the default value of attributes in $CustomCssProperties by a value
  // of the same key found in the configuration file ($GridConfigs).
  return Object.fromEntries(
    Object.keys(GridConfigs)
      .filter((key) => {
        return Object.prototype.hasOwnProperty.call(CustomCssProperties, key);
      })
      .map((configKey) => {
        return [CustomCssProperties[configKey], GridConfigs[configKey]];
      })
  );
})();


export const getRandomTileValue = (initialTileCount=2) => {
    return Math.pow(2, Math.ceil(Math.random() * initialTileCount));
};


export const initGame = (grid, defaultTileCount=2) => {

    const element = grid.getElement();

    for(let i = 0; i < defaultTileCount; i++)  {
        grid.getRandomCell().setTile(
            new Tile(element, getRandomTileValue())
        );
    }

};