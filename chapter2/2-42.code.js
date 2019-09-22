function flatten(arr){
    return function f(arr, new_arr){
        arr.forEach(function(v){
            Array.isArray(v) ? f(v, new_arr): new_arr.push(v);
        });
        return new_arr;
    }(arr, []);
}

var aa = flatten([1,2,3,4,5,[5,6,7],[8]]);

console.log(aa);