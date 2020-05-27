/**
 * get random number within specific range
 * @param min min number
 * @param max max number
 */
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * pick random item from array
 * @param items random item candidates
 */
export function randomPick(items) {
  return items[randomNumber(0, items.length)];
}

/**
 * return random key
 */
export function randomKey() {
  return Math.random().toString(32).split('.')[1];
}

/**
 * return random date
 */
export function randomDate(
  year = 1990,
  month = 0,
  date = 1,
  endYear = new Date().getFullYear(),
  endMonth = new Date().getMonth(),
  endDate = new Date().getDate(),
) {
  const start = new Date(year, month, date);
  const end = new Date(endYear, endMonth, endDate);

  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
