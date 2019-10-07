function _async(func) {
	return function(){
		var _callback;
		
		arguments[arguments.length++] = function(result){ 
		// give args 20, 30 while it started, and function have to callback cause why added arguments
			_callback(result);
		};
		
		// 		func.apply(null, arguments); // passed 3 args at define func
		
		(function wait(args){
			/* add new space */
			for(var i =0; i<args.length ; i++)
				if (args[i] && args[i].name == '_async_cb_receiver')
					return args[i](function(arg) {args[i] = arg; wait(args)});
			func.apply(null, args);
		})(arguments);
		
		
		function _async_cb_receiver(callback){
			_callback = callback;
		}
		return _async_cb_receiver; // It is function sort of callback
	}
}

var add = _async(function(a, b, callback){
	setTimeout(function(){
		console.log('add: ', a, b);
		callback(a+b);
	}, 1000);
});

var sub = _async(function(a, b, callback){
	setTimeout(function(){
		console.log('sub: ', a, b);
		callback(a-b);
	}, 1000);
});

var div = _async(function(a, b, callback){
	setTimeout(function(){
		console.log('div: ', a, b);
		callback(a / b);
	}, 1000);
});


var log = _async(function(val){
	setTimeout(function(){
		console.log(val);
	}, 1000);
});


log(div(sub(add(10, 15), 5), 10));

