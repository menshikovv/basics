"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  
  return arr;
}

console.log(solveEquation(1, -3, 2));
console.log(solveEquation(1, -2, 1));
console.log(solveEquation(1, 2, 3));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyInterestRate = percent / 100 / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (monthlyInterestRate + (monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1)));
  const totalPayment = monthlyPayment * countMonths + contribution;
  const roundedTotalPayment = Math.round(totalPayment * 100) / 100;
  return roundedTotalPayment;
}

console.log(calculateTotalMortgage(10,0,50000,12));
console.log(calculateTotalMortgage(10,1000,50000,12));
console.log(calculateTotalMortgage(10,0,20000,24));
console.log(calculateTotalMortgage(10,1000,20000,24));
console.log(calculateTotalMortgage(10,20000,20000,24));
console.log(calculateTotalMortgage10(10,0,10000,36));
console.log(calculateTotalMortgage(15,0,10000,36));