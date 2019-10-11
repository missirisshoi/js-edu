/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      
      // если студент знает основы, ему нужно 800 часов; если не знает - плюс еще 500
      if (knowsProgramming) {
        time = 800;
        }
      else {
        time = 800 + 500;
      }
      
      // вычисляем результат в зависимости от того, что в приоритете у студента
      resultTime = Math.ceil(time/config[focus]);

      return resultTime;
  };
