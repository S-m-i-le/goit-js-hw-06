function makeArray(firstArray, secondArray, maxLength) {
  const arrayNew = [];
  for (let i = 0; i < maxLength; i++) {
    if (i <= firstArray.length - 1) {
      arrayNew.push(firstArray[i]);
    }
  }

  for (let i = 0; i <= maxLength - firstArray.length - 1; i++) {
    arrayNew.push(secondArray[i]);
  }
  return arrayNew;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
