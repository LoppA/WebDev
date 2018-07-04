"use strict"

let arr = [12,5,42,55,10];
function do_something(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>32){
            return arr[i];
        }
    }
}

function do_something2(arr) {
	return arr.find(item => item > 32);
}

function do_something3(arr) {
	return arr.filter(item => item > 32);
}

console.log(arr);

console.log(do_something(arr));

console.log(do_something2(arr));

console.log(do_something3(arr));
