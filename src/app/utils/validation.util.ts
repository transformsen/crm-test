/**
 * return true when string value is valid
 * if value is not string, just check existence
 * @param value string value to check
 */
export function isValidString(value: string) {
  if (typeof value === 'string') {
    return value && value.trim();
  } else {
    return !!value;
  }
}

/**
 * return true when value is float format
 * @param value value
 */
export function isFloat(value: string) {
  const floatReg = /^(([+-])?(0|([1-9][0-9]*))(\.[0-9]+)?)$/gm;

  return !!floatReg.exec(value);
}

/**
 * return true when value is integer format
 * @param value value
 */
export function isInteger(value: string | number) {
  const integerReg = /^[0-9]+$/gm;

  return !!integerReg.exec(typeof value === 'string' ? value : value.toString());
}


/**
 * return true when value is date format
 * @param value value
 */
export function isDate(value: string) {
  const dateReg = /(\d{1,2})\s(\w{3}),\s(\d{4})\s(\d{1,2}):(\d{1,2})\s(AM|PM)/gm;
  const dateReg1 = /(\d{2})\/(\d{2})\/(\d{4})/g;
  const dateReg2 = /(\d{4})-(\d{2})-(\d{2})/g;
  const dateReg3 = /(\d{1,2})\s(\w{3})\s(\d{4}),\s(\d{1,2}):(\d{1,2})\s(AM|PM)/gm;
  const dateReg4 = /(\d{1,2})\s(\w{3})\s(\d{4})/gm;

  return !!dateReg.exec(value)
    || !!dateReg1.exec(value)
    || !!dateReg2.exec(value)
    || !!dateReg3.exec(value)
    || !!dateReg4.exec(value)
    || !isNaN(new Date(value).getTime());
}
