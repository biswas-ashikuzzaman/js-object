function fiboNacci(n) {
  const fib = [0, 1]; // Start the series with first two numbers
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; // Add next number as sum of previous two
  }
  return fib; // Return the whole series
}

let input = prompt("Enter how many Fibonacci numbers you want:");
let number = parseInt(input); // Convert string input to number
let result = fiboNacci(number);
console.log(result)
document.write("Fibonacci Series: " + result.join(" ,"));
// console.log(fiboNacci(10)) // Output to console
// document.write("Fibonacci Series: " + fiboNacci(10).join(", "));   // Output to web page
