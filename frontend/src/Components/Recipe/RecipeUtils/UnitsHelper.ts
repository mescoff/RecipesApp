import { string } from "prop-types";

//#region enum & interfaces
export enum VOLUME {
  teaspoon = "tsp",
  tablespoon = "tbsp",
  fluid_ounce = "fl oz",
  cup = "cup",
  gallon = "gal",
  milliliter = "ml",
  liter = "L",
  deciliter = "dl"
}

export enum MASS {
  pound = "lb",
  ounce = "oz",
  milligram = "ml",
  gram = "g",
  kilogram = "kg"
}

export enum TEMPERATURE {
  celcius = "°C",
  fahrenheit = "°F"
}

export enum ConversionType {
  CELCIUS = "celcius",
  FAHRENHEIT = "fahrenheit"
}

// export interface ICookingUnits {
//   VOLUME: EVOLUME;
//   MASS: EMASS;
//   TEMPERATURE: ETEMPERATURE;
// }
//#endregion

// export const CookingUnits = {
//   VOLUME,
//   MASS,
//   TEMPERATURE
// };

export const Convertor = (
  unit_to_convert: number,
  conversion_type: ConversionType
) => {
  var result;
  switch (conversion_type) {
    case ConversionType.CELCIUS:
      result = ((unit_to_convert - 32) * 5) / 9;
      break;
    case ConversionType.FAHRENHEIT:
      result = (unit_to_convert * 9) / 5 + 32;
      break;
    default:
      return 0;
  }
  return Math.round(result);
};
