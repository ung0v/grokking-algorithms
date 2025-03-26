function factorial(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n * (n - 1);
}

console.log(factorial(3));
