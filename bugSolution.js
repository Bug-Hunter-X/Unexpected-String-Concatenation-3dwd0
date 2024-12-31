function foo(a, b) {
  // Ensure both arguments are numbers before addition
  a = Number(a);
  b = Number(b);
  
  if (isNaN(a) || isNaN(b)) {
    return 0; // Or handle error appropriately
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: 3
console.log(foo(1, 2)); // Output: 3
console.log(foo('a', 2)); // Output: 0