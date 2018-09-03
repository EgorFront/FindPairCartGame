(function(){

'use strict';
let layout = `<div class="game-item">
			      <div class="game-item__back"></div>
			      <div class="game-item__front">
			        <img class="game-item__img" src="assets_prod/img/1.jpg">
			      </div>
			    </div>`;

let timer 	 = document.querySelector('.timer'); 			    
let startBtn = document.querySelector('.start-btn');

class Game {
	constructor(numberOfCart) {
		this.gameField = document.querySelector('.game-field');
		this.numberOfCart = numberOfCart;
		this.layout = layout;
		this.timer = timer;
		this.startBtn = startBtn;
		this.timeToGame = numberOfCart * 4;


		this.timerId = 0;
		this.mainClickFunc = 0;
	};
	
	//возвращает массив, по которому располагаются карты
	createMapCart(){
		let arr1 = [];
		let arr2 = [];
		let resultArr = [];

		function compareRandom(a, b) {
		  return Math.random() - 0.5;
		}

		for (let i = 0; i < this.numberOfCart / 2; i++) {
			arr1[i] = i;
			arr2[i] = i; 
		}

		resultArr = [...arr1, ...arr2];
		resultArr.sort(compareRandom);
		return resultArr;
	};

	// Добавляем клик (делегирование)
	addClick(){
		var that = this;

		// Вешаем слушатель
		this.gameField.addEventListener('click', mainClickFunc);

		//Снимаем обработчик клика на определенное время
		// нужно чтобы игрок не мог беспорядочно тыкать по картам
		function freezeGame(time){
			that.gameField.removeEventListener('click', mainClickFunc)
			setTimeout(function(){
				that.gameField.addEventListener('click', mainClickFunc)
			}, time)
		};

		//Проверяет, открыта ли карта
		//Если открыта - возвращает true
		function checkIsOpen(cart){
			return cart.classList.contains('active') ? true : false;
		}

		//Основаня функция клика
		function mainClickFunc(e){

			// логика клика
			const gameFieldClass = 'game-field';
			const gameItemClass  = 'game-item';
			let target = e.target;
			let flag = false;

			//Проверяем элемент (необходимо при делегировании)
			while(target.classList[0] !== gameFieldClass){

				if (target.classList[0] == gameItemClass) {
		      flag = true; // ставим флаг, когда дошли до нужного нам элемента
		      break;
		    }
		    target = target.parentNode;
			}

			if (flag) {

				//Если карта не открыта
				if (!checkIsOpen(target)) {
					freezeGame(500);
					target.classList.add('active');
				} else{
					freezeGame(500);
					target.classList.remove('active');
				}

				// необходимо сравнить карты
				if (that.gameField.querySelectorAll('.game-item.active').length == 2) {
					let openCarts   = that.gameField.querySelectorAll('.game-item.active');

					let dataGameFirst = openCarts[0].getAttribute('data-game');
					let dataGameSecond = openCarts[1].getAttribute('data-game');

					//Карты одинаковые
					if (dataGameFirst === dataGameSecond) {
						// ставим задержку, чтобы не было моментального исчезновения
						setTimeout(function(){

							openCarts[0].classList.add('hidden');
							openCarts[1].classList.add('hidden');
							openCarts[0].classList.remove('active');
							openCarts[1].classList.remove('active');

							let hiddenCarts = that.gameField.querySelectorAll('.game-item.hidden');
							let carts 			= that.gameField.querySelectorAll('.game-item');

							//Если карты кончились (игрок победил);
							console.log(hiddenCarts.length)
							if (hiddenCarts.length === carts.length) {
								alert('Вы победили!');
								that.reset();
							};

						},700);
					} else{ // карты не совпали
						setTimeout(function(){
							openCarts[0].classList.remove('active');
							openCarts[1].classList.remove('active');
						},700);
					}
				}

				
			}
		}
		
		// Копируем функцию обработчик в свойство объекта,
		// чтобы взаимодействовать с ним в методе reset
		this.mainClickFunc = mainClickFunc;
	};

	// запускаем таймер
	startTimer(timeToGame, isReset){
		let time = timeToGame += 1;
		let timer;

		if (isReset) {
			this.timer.innerText = ``;
			return;
		}

		// возвращаем id таймера, который копируется
		// в свойство объекта
		return timer = setInterval(() => {
			time--;
			this.timer.innerText = `${time} сек.`;

			//время вышло
			if(time === 0){
				clearInterval(timer);
				alert('Время вышло :(');
				this.timer.innerText = `${time} секунд`;

				this.reset();
			}
		},1000)
	}

	// добавляем карты на поле
	createCart(clearField = false){

		// очищаем поле, если передан атрибут
		// (используется в reset)
		if (clearField) {
			this.gameField.innerHTML = '';
			return;
		}

		// Перемешиваем карты
		let mapCartArray = this.createMapCart();

		//создаем на поле карты
		let allCart = '';
		for (let i = this.numberOfCart; i > 0; i--) {
			allCart += this.layout;
		}
		this.gameField.innerHTML = allCart;

		// проставляем картам дата атрибуты
		// и картинки
		let carts = document.querySelectorAll('.game-item');
		carts.forEach((item,index) => {
			item.setAttribute('data-game', mapCartArray[index]);

			let img = item.querySelector('.game-item__img');
			img.setAttribute('src', `assets_prod/img/${mapCartArray[index]}.jpg`);
		});
	}

	//Выключаем и включаем кнопку "начать игру"
	changeStartBtn(value){
		if (value === 'disable') {
			this.startBtn.setAttribute('disabled','disabled');
		} else if (value === 'enable'){
			this.startBtn.removeAttribute('disabled');
		}
	};

	startGame(){
		//Создаем карты
		this.createCart();

		//инициализируем клик
		game.addClick();

		// подрубаем таймер
		this.timerId = this.startTimer(this.timeToGame);

		//Выключаем кнопку начала игры
		this.changeStartBtn('disable');
		
	};

	reset(){
		// обновляем таймер
		clearInterval(this.timerId);
		this.startTimer(0, true);

		//Включаем кнопку
		this.changeStartBtn('enable');

		//Очищаем поле
		this.createCart(true);

		//Удаляем обработчик клика
		this.gameField.removeEventListener('click', this.mainClickFunc);
	}
}



let game = new Game(8);

startBtn.addEventListener('click', function(){
	game.startGame();
});

}());
