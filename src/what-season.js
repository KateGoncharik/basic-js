const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date ) {
  if (arguments.length === 0) {
    return ('Unable to determine the time of year!');
  }
  if (date instanceof Date === false) {
    throw new Error("Invalid date!")
  }
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw new Error("Invalid date!");
  }
  let month = date.getUTCMonth();
  const winter = [11, 0, 1];
  const spring = [2, 3, 4];
  const summer = [5, 6, 7];
  const autumn = [8, 9, 10];

  if (winter.includes(month)){
    return 'winter'
  };
  if (spring.includes(month)){
    return 'spring'
  };
  if (summer.includes(month)){
    return 'summer'
  };
  if (autumn.includes(month)){
    return 'autumn'
  };

}

module.exports = {
  getSeason
};
