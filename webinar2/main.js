// ЗАДАНИЕ 1

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 - сначала a увеличивается на 1 потом присваивается c
d = b++; alert(d); // 1 - сначала b присваивается d а потом увеличивается на 1
c = (2+ ++a); alert(c); // 5 - a == 2 - сначала a увеличивается на 1 потом прибавляется 2 и присваивается c
d = (2+ b++); alert(d); // 4 - b == 2 - сначала к b прибавляется 2 потом присваивается d, а потом b увеличивается на 1
alert(a); // 3 - a два раза увеличивается на 1
alert(b); // 3 - b два раза увеличивается на 1

// ЗАДАНИЕ 2

var a = 2;
var x = 1 + (a *= 2); // a = a * 2
alert(x); // x == 5

// ЗАДАНИЕ 3

function ifAB(a, b) {
	if (a >= 0 && b >= 0) alert(a - b);
	if (a < 0 && b < 0) alert(a * b);
	if (a * b < 0) alert(a + b);
}

ifAB(2, 5);
ifAB(-2, -5);
ifAB(2, -5);

// ЗАДАНИЕ 4

var a = 6;
switch (a) {
	case 1: alert(1);
	case 2: alert(2);
	case 3: alert(3);
	case 4: alert(4);
	case 5: alert(5);
	case 6: alert(6);
	case 7: alert(7);
	case 8: alert(8);
	case 9: alert(9);
	case 10: alert(10);
	case 11: alert(11);
	case 12: alert(12);
	case 13: alert(13);
	case 14: alert(14);
	case 15: alert(15);
}

// ЗАДАНИЕ 5

function summation(a, b) {
	return(a + b);
}

function multiplication(a, b) {
	return(a * b);
}

function subtraction(a, b) {
	return(a - b);
}

function division(a, b) {
	return(a / b);
}

// ЗАДАНИЕ 6

function mathOperation(arg1, arg2, operation) {
	switch(operation) {
		case 'сложить': alert(summation(arg1, arg2)); break;
		case 'умножить': alert(multiplication(arg1, arg2)); break;
		case 'вычесть': alert(subtraction(arg1, arg2)); break;
		case 'разделить': alert(division(arg1, arg2)); break;
		default: alert('неизвестная операция')
	}
}

mathOperation(20, 5, 'процент');
mathOperation(20, 5, 'сложить');
mathOperation(20, 5, 'умножить');
mathOperation(20, 5, 'вычесть');
mathOperation(20, 5, 'разделить');

// ЗАДАНИЕ 7

console.log(null == 0); // они не равны потому, что null - это объект, а 0 - это число

// ЗАДАНИЕ 8

function power(val, pow) {
	if (pow != 1) {
    	return val * power(val, pow - 1);
  	} else {
    	return val;
  	}

}

alert(power(5, 12));