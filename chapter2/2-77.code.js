console.log(1);

setTimeout(function(){
	console.log(3);
}, 1000);

console.log(2);

var add = function(a, b, callback){
	setTimeout(function(){
		callback(a+b);
	}, 1000);
};

add("It is ", "callback", function(cb){
	console.log(cb);
});