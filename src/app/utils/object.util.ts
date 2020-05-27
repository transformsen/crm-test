/**
 * set object value with point separated property string
 * @param obj object
 * @param property property
 * @param value value
 */
export function setObjectValue(obj: object, property: string, value: any) {
  let target = obj;
  const properties = property.split('.');

  properties.forEach((p, i) => {
    if (i !== properties.length - 1) {
      target = target[p] || {};
    } else {
      target[p] = value;
    }
  });
}

/**
 * return specific value of the data
 * @param data object data
 * @param property data property string
 */
export function getObjectValue(data: any, property: string) {
  const keys = property.split('.');
  const lastIndex = keys.length - 1;
  let target = data;

  keys.forEach((key, index) => {
    target = target[key];

    if (index !== lastIndex && !target) {
      target = {} as any;
    }
  });

  return target;
}
