// ЗАДАНИЕ 1

function printSimpleNumber(n) {
	var num = 2;
	console.log(num);
	while(num <= n) {
		for(var i = 2; i < num; i++) {
			if(num % i == 0) break;
			else if(i + 1 == num) console.log(num);
		}	
		num++;
	}
};

printSimpleNumber(200);

// ЗАДАНИЕ 2

function printNumber(n) {
	console.log(0 + " - это ноль");
	var num = 1;
	do { 
		if(num % 2 == 0) console.log(num + " - четное число");
		else console.log(num + " - нечетное число");
		num++;
	} while(num <= n);
};

printNumber(20);

// ЗАДАНИЕ 3

for(var i = 0; i < 10; console.log(i), i++);

// ЗАДАНИЕ 4

var i = 1;
var x = "X";
do {
	console.log(x);
	x += "X"; 
	i++;
} while (i <= 20);

if (!("a" in window)) {
    var a = 1;
}
alert(a);