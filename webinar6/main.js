// ЗАДАНИЕ 1 - Корзина магазина

"use strict";

let goods = [
	{   id: 1525,
		title: 'Смартфон Apple iPhone SE 32GB',
		price: 20000,
		qty: 0,
		path: 'smartfon_apple_iphone_se_32gb'
	},
	{   id: 1070,
		title: 'Фотоаппарат Canon EOS 4000D Kit',
		price: 22500,
		qty: 0,
		path: 'tsifrovoy_fotoapparat_canon_eos_4000d_kit'
	},
	{   id: 2367,
		title: 'Акустическая система Magnat Quantum 723',
		price: 37200,
		qty: 0,
		path: 'polochnaya_akusticheskaya_sistema_magnat_quantum_723'
	},
	{   id: 3818,
		title: 'Ресивер AV Yamaha RX-V385',
		price: 18400,
		qty: 0,
		path: 'resiver_av_yamaha_rx_v385'
	}
];

let cart = { // объект корзины
  	goods: [], // массив объектов товаров в корзине
  	qty: 0, // количество товаров в корзине
  	price: 0, // цена всех товаров корзины
  	addToCart: function(id, qty) {
  		let item = getGoodById(id);
  	  	if(item) { 
  	  		for (var i = 0; i < cart.goods.length; i++) {
  	  			if (cart.goods[i].id == id) cart.goods[i].qty += qty;
  	  		}
  	  	}
        else {
        	for (var i = 0; i < goods.length; i++) {
        		if (goods[i].id == id) {
	        		this.goods.push(goods[i]);
    	    		goods[i].qty += qty;
        		}
        	}
        }
        this.sumCart();
  	},
  	sumCart: function() { // метод суммирования количества товаров и цены корзины
  		this.qty = 0;
 		this.price = 0;
    	for (var i = 0; i < this.goods.length; i++) {
    		this.price += this.goods[i].qty * this.goods[i].price;
    		this.qty += this.goods[i].qty;
    	}
  	},
  	clearCart: function(e) { // метод очистки корзины
  		clearPrintToCart(e);
  		this.qty = 0;
  		this.price = 0;
		for (var i = this.goods.length; i > 0; i--) {
			this.goods.pop();
		}  	
		for (var i = 0; i < goods.length; i++) {
			goods[i].qty = 0;
		} 	
  	}
};

function printGoods(e) {
	let divGoods = document.getElementById('goods');
	for (var i = 0; i < goods.length; i++) {
		let title = document.createElement('h2');
		let img = document.createElement('img');
		let price = document.createElement('span');
		let areaQty = document.createElement('input');
		let button = document.createElement('button');
		title.innerHTML = 'id:' + goods[i].id + ' ' + goods[i].title;
		img.src = goods[i].path + '_' + '1' + '.jpg';
		img.id = 'img_' + goods[i].id;
		img.onclick = printImg;
		img.onmouseover = cursorOn;
		img.onmouseout = cursorOff;
		price.innerHTML = 'Цена: ' + goods[i].price + ' pуб.';
		price.className = 'price';
		areaQty.setAttribute('type', 'text');
		areaQty.setAttribute('value', 1);
		areaQty.setAttribute('size', 2);
		areaQty.id = 'input_' + goods[i].id;
		areaQty.className = 'input';
		button.innerHTML = 'в корзину';
		button.id = goods[i].id;
		button.onclick = onButtonClick;
		divGoods.appendChild(title);
		divGoods.appendChild(img);
		divGoods.appendChild(price);
		divGoods.appendChild(areaQty);
		divGoods.appendChild(button);
	}
	printCart(e);
}

let textCart = document.createElement('p');
let buttonNext = document.createElement('button');
let buttonClear = document.createElement('button');
let textSumSum = document.getElementById('sum');
let textQtySum = document.getElementById('qty');

function printCart(e) {
	let idCart = document.getElementById('cart');
	textCart.innerHTML = 'В корзине нет товаров';
	buttonNext.innerHTML = 'купить';
	buttonNext.onclick = onNextClick;
	buttonClear.innerHTML = 'очистить';
	buttonClear.onclick = onButtonClear;
	idCart.insertBefore(textCart, sum);
	idCart.appendChild(buttonNext);
	idCart.appendChild(buttonClear);
}

function getGoodById(id) {
for (var i = 0; i < cart.goods.length; i++) {
		if (cart.goods[i].id == id) return (true);
    	}
    	return false;
}

function clearPrintToCart(e) {
	let idGoods = document.getElementById('cart');
	let elemGoods = document.getElementsByTagName('p');
		for (var i = elemGoods.length - 1; i >= 0; i--) {
			idGoods.removeChild(elemGoods[i]);
		}
		textSumSum.innerHTML = 'Сумма: ' + 0 + ' pуб.';
		textQtySum.innerHTML = 'Товаров: ' + 0 + ' шт.'	
}

function addPrintToCart(e) {
    clearPrintToCart(e);
	let idCart = document.getElementById('cart');
	for (var i = 0; i < cart.goods.length; i++) {
		let textTitle = document.createElement('p');
		let textQty = document.createElement('p');
		textTitle.innerHTML = 'id:' + cart.goods[i].id + ' ' + cart.goods[i].title;
		textQty.innerHTML = 'Кол-во: ' + cart.goods[i].qty;
   	    idCart.insertBefore(textTitle, sum);
		idCart.insertBefore(textQty, sum);
		textSumSum.innerHTML = 'Сумма: ' + cart.price + ' pуб.';
		textQtySum.innerHTML = 'Товаров: ' + cart.qty + ' шт.'
	}
}

function onNextClick(e) {
	alert ('Это учебный сайт. Купить товар нельзя!');
}

function onButtonClear(e) {
	cart.clearCart(e);
	printCart(e);
}

function onButtonClick(e) {
	let inputId = document.getElementById('input_' + e.target.id);
	cart.addToCart(e.target.id, Number(inputId.value));
	printCart(e);
	addPrintToCart(e);
}

function printImg(e) {
	let id = e.target.id.substr(4);
	clearGoods();
	let divGoods = document.getElementById('goods');
	let button = document.createElement('button');
	button.innerHTML = 'назад';
	button.id = 'back';
	button.onclick = back;
	divGoods.appendChild(button);
       	for (var i = 0; i < goods.length; i++) {
       		if (goods[i].id == id) {
				let title = document.createElement('h2');
				let bigPic = document.createElement('img');
				let smallPic1 = document.createElement('img');
				let smallPic2 = document.createElement('img');
				let smallPic3 = document.createElement('img');
				title.innerHTML = 'id:' + goods[i].id + ' ' + goods[i].title;
				bigPic.id = 'big-pic';
				bigPic.className = 'big-' + i;
				smallPic1.id = 'small-pic-1';
				smallPic2.id = 'small-pic-2';
				smallPic3.id = 'small-pic-3';
				smallPic1.onclick = showBigPic;
				smallPic2.onclick = showBigPic;
				smallPic3.onclick = showBigPic;
				smallPic1.onmouseover = cursorOn;
				smallPic2.onmouseover = cursorOn;
				smallPic3.onmouseover = cursorOn;
				smallPic1.onmouseout = cursorOff;
				smallPic2.onmouseout = cursorOff;
				smallPic3.onmouseout = cursorOff;
				bigPic.src = goods[i].path + '_' + '1' + '.jpg';
				smallPic1.src = goods[i].path + '_' + '1' + '.jpg';
  	 			smallPic2.src = goods[i].path + '_' + '2' + '.jpg';
  	 			smallPic3.src = goods[i].path + '_' + '3' + '.jpg';
 			    divGoods.insertBefore(bigPic, button);
 			    divGoods.insertBefore(smallPic1, button);
 			    divGoods.insertBefore(smallPic2, button);
 			    divGoods.insertBefore(smallPic3, button);
				divGoods.insertBefore(title, bigPic);
       		}
       	}
}

function showBigPic(e) {
	console.log(e);
	let bigPic = document.getElementById('big-pic');
	let id = bigPic.className.substr(4);
	bigPic.src = goods[id].path + '_' + e.target.id.substr(10) + '.jpg';
}

function back(e) {
	let divGoods = document.getElementById('goods');
	let button = document.getElementsByTagName('button');
	let img = document.getElementsByTagName('img');
	let title = document.getElementsByTagName('h2');
	divGoods.removeChild(title[0]);
    divGoods.removeChild(img[0]);
    divGoods.removeChild(img[0]);
    divGoods.removeChild(img[0]);
    divGoods.removeChild(img[0]);
	divGoods.removeChild(button[0]);
	printGoods(e);
}

function clearGoods(e) {
	let divGoods = document.getElementById('goods');
	let title = document.getElementsByTagName('h2');
	let img = document.getElementsByTagName('img');
	let price = document.getElementsByTagName('span');
	let areaQty = document.getElementsByTagName('input');
	let button = document.getElementsByTagName('button');
		for (var i = goods.length - 1; i >= 0; i--) {
			divGoods.removeChild(title[i]);
			divGoods.removeChild(img[i]);
			divGoods.removeChild(price[i]);
			divGoods.removeChild(areaQty[i]);
			divGoods.removeChild(button[i]);
		}


}

function cursorOn() {
	document.body.style.cursor = 'pointer';
}

function cursorOff() {
	document.body.style.cursor = 'default';
}

window.onload = printGoods;


// тесты
