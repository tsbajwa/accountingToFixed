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
    addZeros(number, newDecimalIndex + 1);
    // const zerosToAdd = (newDecimalIndex + 1) - number.length;
    // for (let i = 0; i < zerosToAdd; i++) {
    //   number.push('0');
    // }
    number.splice(currentDecimalIndex, 1);
  } else {
    number.splice(currentDecimalIndex, 1);
    number = [...number.slice(0, newDecimalIndex),'.',...number.slice(newDecimalIndex + 1)];
  }

   number = number.join('');
   return number;
}


function addZeros(array, requiredLength) {
  const zerosToAdd = requiredLength - array.length;
  for ( let i = 0; i < zerosToAdd; i++) {
    array.push('0');
  }
}

