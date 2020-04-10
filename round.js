const roundTo = require('round-to');
module.exports=async (input) =>{
  var {toRound} = input;
  delete input.toRound;
  function round(obj, roundToObj) {
    if (Array.isArray(obj)) return obj;
    Object.keys(roundToObj).forEach((key)=>{
      var item = roundToObj[key];
      if (typeof item == 'object') {
        obj[key]=round(obj[key], item);
      } else {
        obj[key] = roundTo(obj[key], item);
      }
    });
    return obj;
  }
  return round(toRound, input);
}
