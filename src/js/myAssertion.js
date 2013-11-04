MyAssertion = function(){

};

MyAssertion.prototype.isPrime = function(number, message){

	var expected = true;
	if(number < 2){
		QUnit.push(false);
		return;
	}

	var n = Math.sqrt(number);

	for(var i=2; i<= n; i++){
		if(number %i === 0){
			QUnit.push(false);
			return;
		}
	}
	QUnit.push(true);
};