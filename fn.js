//函数求和
function sum(arr){
	return arr.reduce(function(x,y){
		return x+y
	})
}

sum([1,5,78,4,5])


//调用变量求和
function lazysum(arr){ 
	var sum =function () {
	// body...
	return arr.reduce(function(x,y){
		return x+y
	});
}
return sum;
}

var f1 = lazysum([1,45,78,56,4])
var f2 = lazysum([1,45,78,56,4])

f();


function count(){
	var arr = [];
	for(var i=1;i<=3;i++){
		arr.push(function(){
			return i*i
		})
	}
	return arr;
}

var result = count();
var f1 = result[0];//16
var f2 = result[1];//16
var f3 = result[2];//16


function count(){
	var arr=[];
	for(var i=1;i<=3;i++){
		arr.push((function(n){
			return function(){
				return n*n
			}
		})(i))
	}
	return arr
}
var result = count();
var f1 = result[0];//1
var f2 = result[1];//4
var f3 = result[2];//9


(function (x) {
	// body...
	return x*x
})(3)

function creat_counter(i){
	var x = i || 0;
	return{
		inc:function(){
			x += 1;
			return x
		}
	}
}

var c1 = creat_counter()
var c2 = creat_counter(10)

c1.inc()//1
c1.inc()//2
c1.inc()//3

c2.inc()//11


function make_pow(n){
	return function(x){
		return Math.pow(x,n);
	}
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);

//算是弄一个上来看看流程
