import { ComplexityOptions } from "joi-password-complexity";

const passwordComplexityOptions: ComplexityOptions = {
  min: 6,
  max: 1024,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 5,
};

export default passwordComplexityOptions;
