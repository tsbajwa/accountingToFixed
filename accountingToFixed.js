function toFixedStringy(value, precision) {
  const multipliedValue = Number(moveDecimal(value, precision));
  const roundedValue = Math.round(multipliedValue);
  const finalValue = Number(moveDecimal(roundedValue, -precision));
  return finalValue;
}

// Internal Helper functions

function moveDecimal(value, precision) {
  let number = Array.from(value.toString());
  let currentDecimalIndex = number.indexOf('.');
  
  // if number has no decimal
  if (currentDecimalIndex === -1) {
    currentDecimalIndex = number.length;
    number.push('.');
  }

  const newDecimalIndex = currentDecimalIndex + precision;
  number.splice(currentDecimalIndex, 1);

  if (newDecimalIndex > number.length) {
    addZeros(number, newDecimalIndex);
    return number.join('');
  // In some cases, rounding the number may remove 0's from front of number (e.g 0.05, precision 2). 
  // Will need to first add zeros to front of number in order to move decimal point to final position.   
  } else if (newDecimalIndex < 0) {
    addZeros(number, precision);
  }
  number = [...number.slice(0, Math.abs(newDecimalIndex)), '.', ...number.slice(Math.abs(newDecimalIndex))]
  return number.join('');

}

function addZeros(array, requiredLength) {
  if (requiredLength < 0) {
    let zerosToAdd = Math.abs(requiredLength)
    for (let i = 0; i < zerosToAdd; i++) {
      array.unshift('0');
    }
  } else {
    let zerosToAdd = requiredLength - array.length;
    for (let i = 0; i < zerosToAdd; i++) {
      array.push('0');
    }
  }
}

