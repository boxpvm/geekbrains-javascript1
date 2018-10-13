// ЗАДАНИЕ 1

// вариант1

function parseNumber1(n) {
	let number = {};
		if(n >= 0 && n <= 999) {
			number.единицы = n % 10;
			n = ~~(n / 10);
			number.десятки = n % 10;
			n = ~~(n / 10);
			number.сотни = n % 10;
		} else console.log("номер должен быть от 0 до 999");
	return number;
};

console.log(parseNumber1(5));
console.log(parseNumber1(48));
console.log(parseNumber1(679));
console.log(parseNumber1(32789));

// вариант2

function parseNumber2(n) {
	let number = {};
	let str = String(n);
		if(n >= 0 && n <= 9) {
			number.единицы = Number(str[0]);
		} else if(n >= 10 && n <= 99) {
			number.единицы = Number(str[1]);
			number.десятки = Number(str[0]);
		} else if(n >= 100 && n <= 999) {
			number.единицы = Number(str[2]);
			number.десятки = Number(str[1]);
			number.сотни = Number(str[0]);
		} else console.log("номер должен быть от 0 до 999");
	return number;
};

console.log(parseNumber2(5));
console.log(parseNumber2(48));
console.log(parseNumber2(679));
console.log(parseNumber2(32789));

// ЗАДАНИЕ 2 - Корзина магазина

const smartphone = { // объект товара
  price: 320, // цена товара
  qty: 2 // количество товара
};

const refrigerator = { // объект товара
  price: 840, // цена товара
  qty: 1 // количество товара
};

const television = { // объект товара
  price: 550, // цена товара
  qty: 3 // количество товара
};

const basket = { // объект корзины
  goods: {}, // объект объектов товаров в корзине
  qty: null, // количество товаров в корзине
  price: null, // цена всех товаров корзины
  sumBasket: function() { // метод суммирования количества товаров и цены корзины
    for (let key in this.goods) {
      this.price += this.goods[key].qty * this.goods[key].price;
      this.qty += this.goods[key].qty;
    }
  },
  clearBasket: function() { // метод очистки корзины
	this.price = null;
	this.qty = null;
	for (var key in this.goods) {
		delete this.goods[key];
	}  	
  }
};

function addToBasket(item) { // функция добавления объектов товаров в корзину
  basket.goods = {
    ...basket.goods,
    ...item
  }
};

// тесты

addToBasket({smartphone, refrigerator, television});

console.log(basket.goods);

basket.sumBasket();

console.log("сумма: " + basket.price, " кол.товаров: " + basket.qty);

basket.clearBasket();

addToBasket({smartphone, refrigerator});

console.log(basket.goods);

basket.sumBasket();

console.log("сумма: " + basket.price, " кол.товаров: " + basket.qty);

basket.clearBasket();

addToBasket({television});

console.log(basket.goods);

basket.sumBasket();

console.log("сумма: " + basket.price, " кол.товаров: " + basket.qty);

basket.clearBasket();