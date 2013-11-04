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
 // todo
});

test('throwing an error when calculating the factorial for a negative number', function(){
 raises(function(){
  // todo
 }, "There is no factorial for negative number");
})