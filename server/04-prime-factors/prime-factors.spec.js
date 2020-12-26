describe('the prime factors canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

let findPrimeFactors = (number) => {
   let factors = [];
   for (let divisor = 2; number > 1; divisor += 1) {
     for (; number % divisor === 0; number /= divisor) factors.push(divisor);
   }
   return factors;
 };

describe('a prime factors function should', () => {
  it('return none for 1', () => {
  expect(findPrimeFactors(1)).toEqual([]);
});
  it('return 2,2,2,2,2,3,3,3 for 864', () => {
  expect(findPrimeFactors(864)).toEqual([2,2,2,2,2,3,3,3]);
});
  it('return 993 for 993', () => {
  expect(findPrimeFactors(993)).toEqual([993]);
});
});
