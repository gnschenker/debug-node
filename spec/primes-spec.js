var sut = require('../primes.js');
describe("when evaluating if a given number is a prime", function(){
  describe("when the number is a prime", function(){
    it("should return 'true'", function(){
      expect(sut.isPrime(11)).toBe(true);
    });
  });
});