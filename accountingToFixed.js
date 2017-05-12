function toFixedStringy(value, precision) {

const multipliedValue = Number(moveDecimal(value, precision));
const roundedValue = Math.round(multipliedValue);
const finalValue =  Number(moveDecimal(roundedValue, -precision));
return finalValue;
}



// Internal Helper functions

function moveDecimal(value, precision) {
  let number = Array.from(value.toString());
  let currentDecimalIndex = number.indexOf('.');

  if (currentDecimalIndex === -1) {
    currentDecimalIndex = number.length;
    number.push('.');
  }

  const newDecimalIndex = currentDecimalIndex + precision;
 //Remove current decimal
  
  number.splice(currentDecimalIndex, 1);
  
  if (newDecimalIndex > number.length) {
    addZeros(number, newDecimalIndex);
  } else {
    number = [...number.slice(0, newDecimalIndex),'.',...number.slice(newDecimalIndex)];
  }

   return number.join('');
   
}

function addZeros(array, requiredLength) {
  const zerosToAdd = requiredLength - array.length;
  for ( let i = 0; i < zerosToAdd; i++) {
    array.push('0');
  }
}

