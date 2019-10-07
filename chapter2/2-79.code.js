function wrap(func){
	return function(){
		return func.apply(null, arguments);
	}
}

var add = wrap(function(a, b, callback){
	setTimeout(function(){
		callback(a+b);
	}, 1000);
});

add(5, 10, function(r){
	console.log(r);
});
