function toFixedStringy(value, precision)  {
  //Convert value to a string
  var stringValue = value.toString();

  //Find position of decimal point. 
  var decimalPosition = stringValue.indexOf(".");
  // Remove decimal point from stringValue
  var numberWithoutDecimal = stringValue.replace('.','');

  // Find length of string (decimal removed)
  var stringLength = stringValue.length
  
  // If precision is longer then string, add '0' to end of string as many times as is needed
  if(stringLength - (decimalPosition + 1) < precision) {
    var zerosToAdd = Maths.abs(stringLength - (decimalPosition + 1) - precision);
    for (var i = 0; i < zerosToAdd; i++) {
    numberWithoutDecimal + "0";
    }
  } 
 
  // Splice string in order to add decimal in new spot i.e move decimal precision times over
  var posBeforeDecimal = precision + decimalPosition;
 
  var stringBeforeDecimal = numberWithoutDecimal.slice(0, posBeforeDecimal);
  var stringAfterDecimal =  numberWithoutDecimal.slice(posBeforeDecimal)
  
  //String with new decimal
  var newDecimalString = stringBeforeDecimal + "." + stringAfterDecimal;

  //Revert new string to number 
  var newStringtoNumber = Number(newDecimalString);

  //Round number 
  var numberRounded = Math.round(newStringtoNumber);

 // Divide number to bring it back to original number after rounding method applied
  var finalNumber = numberRounded/ Math.pow(10, precision);

  return finalNumber;
} 


//  console.log(numberWithoutDecimal);
//   console.log(endNumber);
//   console.log(stringLength);
//   console.log(beforeDecimal);
//   console.log(afterDecimal);
//   console.log(newDecimalString);
//   console.log(backToNumber);
//   console.log(numberRounded);
//   console.log(finalNumber);