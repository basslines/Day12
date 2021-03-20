function sumFibonacci(num) {
  var sum = 0;
  var n = 0;

  while (n <= num) {
    var value = fibonacciElement(n);

    if (value % 2 !== 0 && value <= num) {
      sum = sum + value;
    }
    n++;
  }
  return sum;
}
function fibonacciElement(n) {
  if (n <= 1) return n;
  return fibonacciElement(n - 1) + fibonacciElement(n - 2);
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
