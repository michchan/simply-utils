/**
 * References: https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
 * 
 * @param {Number} seconds 
 */
const toHHMMSS = (seconds: number): string => {
  const secNum = parseInt(`${seconds}`, 10); // don't forget the second param
  let hours: string | number  = Math.floor(secNum / 3600);
  let minutes: string | number = Math.floor((secNum - (hours * 3600)) / 60);
  let _seconds: string | number = secNum - (hours * 3600) - (minutes * 60);

  if (hours  < 10) {hours  = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (_seconds < 10) {_seconds = "0"+_seconds;}
  
  return (parseInt(`${hours}`) === 0? '' : hours + ':')
      + minutes 
      + ':' 
      +_seconds;
}

export default toHHMMSS
