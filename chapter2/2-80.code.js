function _async(func) {
	return function(){
		var _callback;
		
		arguments[arguments.length++] = function(result){ 
		// give args 20, 30 while it started, and function have to callback cause why added arguments
			_callback(result);
		};
		func.apply(null, arguments); // passed 3 args at define func
		
		function _async_cb_receiver(callback){
			_callback = callback;
		}
		return _async_cb_receiver; // It is function sort of callback
	}
}

var add = _async(function(a, b, callback){
	setTimeout(function(){
		callback(a+b);
	}, 1000);
});

add(20, 30)(function(r){
	console.log(r);
})