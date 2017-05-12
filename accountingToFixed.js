function toFixedStringy(value, precision) {

const multipledValue = moveDecimal(value, precision);
}

function moveDecimal(value, precision) {
  let number = Array.from(value.toString());
  let currentDecimalIndex = number.indexOf('.');

  if (currentDecimalIndex === -1) {
    currentDecimalIndex = number.length;
    number.push('.');
  }

  const newDecimalIndex = currentDecimalIndex + precision;

  if (newDecimalIndex +  1 > number.length) {
    const zerosToAdd = (newDecimalIndex + 1) - number.length;
    for (let i = 0; i < zerosToAdd; i++) {
      number.push('0');
    }
    number.splice(currentDecimalIndex, 1);
  } else {
    number.splice(currentDecimalIndex, 1);
    number = [...number.slice(0, newDecimalIndex),'.',...number.slice(newDecimalIndex + 1)];
  }

   number = number.join('');
   return number;
}
  



// function toFixedStringy(value, precision)  {
//   var stringValue = value.toString();
//   var decimalPosition = stringValue.indexOf(".");
//   var stringLength = stringValue.length;
  
//   // If precision is longer then string, add '0' to end of string as many times as is needed
//   if(stringLength - (decimalPosition + 1) < precision) {
//     var zerosToAdd = Math.abs(stringLength - (decimalPosition + 1) - precision);
//     for (var i = 0; i < zerosToAdd; i++) {
//     stringValue = stringValue + "0";
//     }
//   }; 
 
//   // Remove decimal point from stringValue
//   var numberWithoutDecimal = stringValue.replace('.','');
//   // Splice string in order to add decimal in new spot i.e move decimal precision times over
//   var posBeforeDecimal = precision + decimalPosition;
//   var stringBeforeDecimal = numberWithoutDecimal.slice(0, posBeforeDecimal);
//   var stringAfterDecimal =  numberWithoutDecimal.slice(posBeforeDecimal);
  
//   //String with new decimal
//   var newDecimalString = stringBeforeDecimal.concat(".",stringAfterDecimal);

//   //Revert new string to number 
//   var newStringtoNumber = Number(newDecimalString);

//   //Round number 
//   var numberRounded = Math.round(newStringtoNumber);

//  // Divide number to bring it back to original number after rounding method applied
//   var finalNumber = numberRounded/ Math.pow(10, precision);

//   return finalNumber;
// } 

