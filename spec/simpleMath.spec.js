module( 'Factorial', {
 setup : function() {
  // return before
  this.simpleMath = new SimpleMath();
 }, teardown : function(){
  // return after
  delete this.simpleMath;
 },
});

test('calculating factorial for a positive number', function(){
 equal(this.simpleMath.getFactorial(3), 6, 'Factorial of three must equal six ');
});

test('calculating factorial for zero', function(){
 equal(this.simpleMath.getFactorial(0), 1, 'Factorial of zero must equal one ');
});

test('throwing an error when calculating the factorial for a negative number', function(){
 raises(function(){
  this.simpleMath.getFactorial(-10);
 }, "There is no factorial for negative number");
})

module( 'signum', {
 setup : function() {
  // return before
  this.simpleMath = new SimpleMath();
 }, teardown : function(){
  // return after
  delete this.simpleMath;
 },
});

test('calculating factorial for a positive number', function(){
 equal(this.simpleMath.signum(10), 1, 'Result is 1 ');
});

test('calculating factorial for zero', function(){
 equal(this.simpleMath.signum(0), 0, 'Result is 0 ');
});

test('throwing an error when calculating the factorial for a negative number', function(){
 equal(this.simpleMath.signum(-10),-1, 'Result -1');
});

module( 'average', {
 setup : function() {
  // return before
  this.simpleMath = new SimpleMath();
 }, teardown : function(){
  // return after
  delete this.simpleMath;
 },
});

test('calculating factorial for a positive number', function(){
 equal(this.simpleMath.average(15,3),9, 'average');
});

test('calculating factorial for zero', function(){
 equal(this.simpleMath.average(0,0), 0, 'average is 0 ');
});

test('throwing an error when calculating the factorial for a negative number', function(){
 equal(this.simpleMath.average(-10,25),7, 'Result 7');
});


assertion = new MyAssertion();
isPrime = assertion.isPrime;

test('isPrime? and sum', function(){
	isPrime(7, "7 is prime?");
});