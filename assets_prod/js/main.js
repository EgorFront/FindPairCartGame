'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*global*/
(function () {

	'use strict';

	var layout = '<div class="game-item">\n\t\t\t      <div class="game-item__back"></div>\n\t\t\t      <div class="game-item__front">\n\t\t\t        <img class="game-item__img" src="assets_prod/img/1.jpg">\n\t\t\t      </div>\n\t\t\t    </div>';

	var timer = document.querySelector('.timer');
	var startBtn = document.querySelector('.start-btn');

	var Game = function () {
		function Game(numberOfCart) {
			_classCallCheck(this, Game);

			this.gameField = document.querySelector('.game-field');
			this.numberOfCart = numberOfCart;
			this.layout = layout;
			this.timer = timer;
			this.startBtn = startBtn;
			this.timeToGame = numberOfCart * 4;

			this.timerId = 0;
			this.mainClickFunc = 0;
		}

		_createClass(Game, [{
			key: 'createMapCart',


			//возвращает массив, по которому располагаются карты
			value: function createMapCart() {
				var arr1 = [];
				var arr2 = [];
				var resultArr = [];

				function compareRandom(a, b) {
					return Math.random() - 0.5;
				}

				for (var i = 0; i < this.numberOfCart / 2; i++) {
					arr1[i] = i;
					arr2[i] = i;
				}

				resultArr = [].concat(arr1, arr2);
				resultArr.sort(compareRandom);
				return resultArr;
			}
		}, {
			key: 'addClick',


			// Добавляем клик (делегирование)
			value: function addClick() {
				var that = this;

				// Вешаем слушатель
				this.gameField.addEventListener('click', mainClickFunc);

				//Снимаем обработчик клика на определенное время
				// нужно чтобы игрок не мог беспорядочно тыкать по картам
				function freezeGame(time) {
					that.gameField.removeEventListener('click', mainClickFunc);
					setTimeout(function () {
						that.gameField.addEventListener('click', mainClickFunc);
					}, time);
				};

				//Проверяет, открыта ли карта
				//Если открыта - возвращает true
				function checkIsOpen(cart) {
					return cart.classList.contains('active') ? true : false;
				}

				//Основаня функция клика
				function mainClickFunc(e) {

					// логика клика
					var gameFieldClass = 'game-field';
					var gameItemClass = 'game-item';
					var target = e.target;
					var flag = false;

					//Проверяем элемент (необходимо при делегировании)
					while (target.classList[0] !== gameFieldClass) {

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
						} else {
							freezeGame(500);
							target.classList.remove('active');
						}

						// необходимо сравнить карты
						if (that.gameField.querySelectorAll('.game-item.active').length == 2) {
							var openCarts = that.gameField.querySelectorAll('.game-item.active');

							var dataGameFirst = openCarts[0].getAttribute('data-game');
							var dataGameSecond = openCarts[1].getAttribute('data-game');

							//Карты одинаковые
							if (dataGameFirst === dataGameSecond) {
								// ставим задержку, чтобы не было моментального исчезновения
								setTimeout(function () {

									openCarts[0].classList.add('hidden');
									openCarts[1].classList.add('hidden');
									openCarts[0].classList.remove('active');
									openCarts[1].classList.remove('active');

									var hiddenCarts = that.gameField.querySelectorAll('.game-item.hidden');
									var carts = that.gameField.querySelectorAll('.game-item');

									//Если карты кончились (игрок победил);
									console.log(hiddenCarts.length);
									if (hiddenCarts.length === carts.length) {
										alert('Вы победили!');
										that.reset();
									};
								}, 700);
							} else {
								// карты не совпали
								setTimeout(function () {
									openCarts[0].classList.remove('active');
									openCarts[1].classList.remove('active');
								}, 700);
							}
						}
					}
				}

				// Копируем функцию обработчик в свойство объекта,
				// чтобы взаимодействовать с ним в методе reset
				this.mainClickFunc = mainClickFunc;
			}
		}, {
			key: 'startTimer',


			// запускаем таймер
			value: function startTimer(timeToGame, isReset) {
				var _this = this;

				var time = timeToGame += 1;
				var timer = void 0;

				if (isReset) {
					this.timer.innerText = '';
					return;
				}

				// возвращаем id таймера, который копируется
				// в свойство объекта
				return timer = setInterval(function () {
					time--;
					_this.timer.innerText = time + ' \u0441\u0435\u043A.';

					//время вышло
					if (time === 0) {
						clearInterval(timer);
						alert('Время вышло :(');
						_this.timer.innerText = time + ' \u0441\u0435\u043A\u0443\u043D\u0434';

						_this.reset();
					}
				}, 1000);
			}

			// добавляем карты на поле

		}, {
			key: 'createCart',
			value: function createCart() {
				var clearField = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


				// очищаем поле, если передан атрибут
				// (используется в reset)
				if (clearField) {
					this.gameField.innerHTML = '';
					return;
				}

				// Перемешиваем карты
				var mapCartArray = this.createMapCart();

				//создаем на поле карты
				var allCart = '';
				for (var i = this.numberOfCart; i > 0; i--) {
					allCart += this.layout;
				}
				this.gameField.innerHTML = allCart;

				// проставляем картам дата атрибуты
				// и картинки
				var carts = document.querySelectorAll('.game-item');
				carts.forEach(function (item, index) {
					item.setAttribute('data-game', mapCartArray[index]);

					var img = item.querySelector('.game-item__img');
					img.setAttribute('src', 'assets_prod/img/' + mapCartArray[index] + '.jpg');
				});
			}

			//Выключаем и включаем кнопку "начать игру"

		}, {
			key: 'changeStartBtn',
			value: function changeStartBtn(value) {
				if (value === 'disable') {
					this.startBtn.setAttribute('disabled', 'disabled');
				} else if (value === 'enable') {
					this.startBtn.removeAttribute('disabled');
				}
			}
		}, {
			key: 'startGame',
			value: function startGame() {
				//Создаем карты
				this.createCart();

				//инициализируем клик
				game.addClick();

				// подрубаем таймер
				this.timerId = this.startTimer(this.timeToGame);

				//Выключаем кнопку начала игры
				this.changeStartBtn('disable');
			}
		}, {
			key: 'reset',
			value: function reset() {
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
		}]);

		return Game;
	}();

	var game = new Game(8);

	startBtn.addEventListener('click', function () {
		game.startGame();
	});
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibGF5b3V0IiwidGltZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydEJ0biIsIkdhbWUiLCJudW1iZXJPZkNhcnQiLCJnYW1lRmllbGQiLCJ0aW1lVG9HYW1lIiwidGltZXJJZCIsIm1haW5DbGlja0Z1bmMiLCJhcnIxIiwiYXJyMiIsInJlc3VsdEFyciIsImNvbXBhcmVSYW5kb20iLCJhIiwiYiIsIk1hdGgiLCJyYW5kb20iLCJpIiwic29ydCIsInRoYXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZnJlZXplR2FtZSIsInRpbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImNoZWNrSXNPcGVuIiwiY2FydCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZSIsImdhbWVGaWVsZENsYXNzIiwiZ2FtZUl0ZW1DbGFzcyIsInRhcmdldCIsImZsYWciLCJwYXJlbnROb2RlIiwiYWRkIiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIm9wZW5DYXJ0cyIsImRhdGFHYW1lRmlyc3QiLCJnZXRBdHRyaWJ1dGUiLCJkYXRhR2FtZVNlY29uZCIsImhpZGRlbkNhcnRzIiwiY2FydHMiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJyZXNldCIsImlzUmVzZXQiLCJpbm5lclRleHQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbGVhckZpZWxkIiwiaW5uZXJIVE1MIiwibWFwQ2FydEFycmF5IiwiY3JlYXRlTWFwQ2FydCIsImFsbENhcnQiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4Iiwic2V0QXR0cmlidXRlIiwiaW1nIiwidmFsdWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjcmVhdGVDYXJ0IiwiZ2FtZSIsImFkZENsaWNrIiwic3RhcnRUaW1lciIsImNoYW5nZVN0YXJ0QnRuIiwic3RhcnRHYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNDLGFBQVU7O0FBRVg7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QyxPQUFuQyxFQUE0QyxLQUFLZixhQUFqRDtBQUNBO0FBL09TOztBQUFBO0FBQUE7O0FBb1BYLEtBQUkwRCxPQUFPLElBQUkvRCxJQUFKLENBQVMsQ0FBVCxDQUFYOztBQUVBRCxVQUFTa0IsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBVTtBQUM1QzhDLE9BQUtJLFNBQUw7QUFDQSxFQUZEO0FBSUMsQ0ExUEEsR0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWwqL1xyXG4oZnVuY3Rpb24oKXtcclxuXHJcbid1c2Ugc3RyaWN0JztcclxubGV0IGxheW91dCA9IGA8ZGl2IGNsYXNzPVwiZ2FtZS1pdGVtXCI+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWl0ZW1fX2JhY2tcIj48L2Rpdj5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzcz1cImdhbWUtaXRlbV9fZnJvbnRcIj5cclxuXHRcdFx0ICAgICAgICA8aW1nIGNsYXNzPVwiZ2FtZS1pdGVtX19pbWdcIiBzcmM9XCJhc3NldHNfcHJvZC9pbWcvMS5qcGdcIj5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8L2Rpdj5gO1xyXG5cclxubGV0IHRpbWVyIFx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVyJyk7IFx0XHRcdCAgICBcclxubGV0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJ0bicpO1xyXG5cclxuY2xhc3MgR2FtZSB7XHJcblx0Y29uc3RydWN0b3IobnVtYmVyT2ZDYXJ0KSB7XHJcblx0XHR0aGlzLmdhbWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWZpZWxkJyk7XHJcblx0XHR0aGlzLm51bWJlck9mQ2FydCA9IG51bWJlck9mQ2FydDtcclxuXHRcdHRoaXMubGF5b3V0ID0gbGF5b3V0O1xyXG5cdFx0dGhpcy50aW1lciA9IHRpbWVyO1xyXG5cdFx0dGhpcy5zdGFydEJ0biA9IHN0YXJ0QnRuO1xyXG5cdFx0dGhpcy50aW1lVG9HYW1lID0gbnVtYmVyT2ZDYXJ0ICogNDtcclxuXHJcblxyXG5cdFx0dGhpcy50aW1lcklkID0gMDtcclxuXHRcdHRoaXMubWFpbkNsaWNrRnVuYyA9IDA7XHJcblx0fTtcclxuXHRcclxuXHQvL9Cy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC80LDRgdGB0LjQsiwg0L/QviDQutC+0YLQvtGA0L7QvNGDINGA0LDRgdC/0L7Qu9Cw0LPQsNGO0YLRgdGPINC60LDRgNGC0YtcclxuXHRjcmVhdGVNYXBDYXJ0KCl7XHJcblx0XHRsZXQgYXJyMSA9IFtdO1xyXG5cdFx0bGV0IGFycjIgPSBbXTtcclxuXHRcdGxldCByZXN1bHRBcnIgPSBbXTtcclxuXHJcblx0XHRmdW5jdGlvbiBjb21wYXJlUmFuZG9tKGEsIGIpIHtcclxuXHRcdCAgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjU7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bWJlck9mQ2FydCAvIDI7IGkrKykge1xyXG5cdFx0XHRhcnIxW2ldID0gaTtcclxuXHRcdFx0YXJyMltpXSA9IGk7IFxyXG5cdFx0fVxyXG5cclxuXHRcdHJlc3VsdEFyciA9IFsuLi5hcnIxLCAuLi5hcnIyXTtcclxuXHRcdHJlc3VsdEFyci5zb3J0KGNvbXBhcmVSYW5kb20pO1xyXG5cdFx0cmV0dXJuIHJlc3VsdEFycjtcclxuXHR9O1xyXG5cclxuXHQvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0LrQu9C40LogKNC00LXQu9C10LPQuNGA0L7QstCw0L3QuNC1KVxyXG5cdGFkZENsaWNrKCl7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdFx0Ly8g0JLQtdGI0LDQtdC8INGB0LvRg9GI0LDRgtC10LvRjFxyXG5cdFx0dGhpcy5nYW1lRmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluQ2xpY2tGdW5jKTtcclxuXHJcblx0XHQvL9Ch0L3QuNC80LDQtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0L3QsCDQvtC/0YDQtdC00LXQu9C10L3QvdC+0LUg0LLRgNC10LzRj1xyXG5cdFx0Ly8g0L3Rg9C20L3QviDRh9GC0L7QsdGLINC40LPRgNC+0Log0L3QtSDQvNC+0LMg0LHQtdGB0L/QvtGA0Y/QtNC+0YfQvdC+INGC0YvQutCw0YLRjCDQv9C+INC60LDRgNGC0LDQvFxyXG5cdFx0ZnVuY3Rpb24gZnJlZXplR2FtZSh0aW1lKXtcclxuXHRcdFx0dGhhdC5nYW1lRmllbGQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluQ2xpY2tGdW5jKVxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dGhhdC5nYW1lRmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWluQ2xpY2tGdW5jKVxyXG5cdFx0XHR9LCB0aW1lKVxyXG5cdFx0fTtcclxuXHJcblx0XHQvL9Cf0YDQvtCy0LXRgNGP0LXRgiwg0L7RgtC60YDRi9GC0LAg0LvQuCDQutCw0YDRgtCwXHJcblx0XHQvL9CV0YHQu9C4INC+0YLQutGA0YvRgtCwIC0g0LLQvtC30LLRgNCw0YnQsNC10YIgdHJ1ZVxyXG5cdFx0ZnVuY3Rpb24gY2hlY2tJc09wZW4oY2FydCl7XHJcblx0XHRcdHJldHVybiBjYXJ0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly/QntGB0L3QvtCy0LDQvdGPINGE0YPQvdC60YbQuNGPINC60LvQuNC60LBcclxuXHRcdGZ1bmN0aW9uIG1haW5DbGlja0Z1bmMoZSl7XHJcblxyXG5cdFx0XHQvLyDQu9C+0LPQuNC60LAg0LrQu9C40LrQsFxyXG5cdFx0XHRjb25zdCBnYW1lRmllbGRDbGFzcyA9ICdnYW1lLWZpZWxkJztcclxuXHRcdFx0Y29uc3QgZ2FtZUl0ZW1DbGFzcyAgPSAnZ2FtZS1pdGVtJztcclxuXHRcdFx0bGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cdFx0XHRsZXQgZmxhZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Ly/Qn9GA0L7QstC10YDRj9C10Lwg0Y3Qu9C10LzQtdC90YIgKNC90LXQvtCx0YXQvtC00LjQvNC+INC/0YDQuCDQtNC10LvQtdCz0LjRgNC+0LLQsNC90LjQuClcclxuXHRcdFx0d2hpbGUodGFyZ2V0LmNsYXNzTGlzdFswXSAhPT0gZ2FtZUZpZWxkQ2xhc3Mpe1xyXG5cclxuXHRcdFx0XHRpZiAodGFyZ2V0LmNsYXNzTGlzdFswXSA9PSBnYW1lSXRlbUNsYXNzKSB7XHJcblx0XHQgICAgICBmbGFnID0gdHJ1ZTsgLy8g0YHRgtCw0LLQuNC8INGE0LvQsNCzLCDQutC+0LPQtNCwINC00L7RiNC70Lgg0LTQviDQvdGD0LbQvdC+0LPQviDQvdCw0Lwg0Y3Qu9C10LzQtdC90YLQsFxyXG5cdFx0ICAgICAgYnJlYWs7XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoZmxhZykge1xyXG5cclxuXHRcdFx0XHQvL9CV0YHQu9C4INC60LDRgNGC0LAg0L3QtSDQvtGC0LrRgNGL0YLQsFxyXG5cdFx0XHRcdGlmICghY2hlY2tJc09wZW4odGFyZ2V0KSkge1xyXG5cdFx0XHRcdFx0ZnJlZXplR2FtZSg1MDApO1xyXG5cdFx0XHRcdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH0gZWxzZXtcclxuXHRcdFx0XHRcdGZyZWV6ZUdhbWUoNTAwKTtcclxuXHRcdFx0XHRcdHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vINC90LXQvtCx0YXQvtC00LjQvNC+INGB0YDQsNCy0L3QuNGC0Ywg0LrQsNGA0YLRi1xyXG5cdFx0XHRcdGlmICh0aGF0LmdhbWVGaWVsZC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1pdGVtLmFjdGl2ZScpLmxlbmd0aCA9PSAyKSB7XHJcblx0XHRcdFx0XHRsZXQgb3BlbkNhcnRzICAgPSB0aGF0LmdhbWVGaWVsZC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1pdGVtLmFjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBkYXRhR2FtZUZpcnN0ID0gb3BlbkNhcnRzWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1nYW1lJyk7XHJcblx0XHRcdFx0XHRsZXQgZGF0YUdhbWVTZWNvbmQgPSBvcGVuQ2FydHNbMV0uZ2V0QXR0cmlidXRlKCdkYXRhLWdhbWUnKTtcclxuXHJcblx0XHRcdFx0XHQvL9Ca0LDRgNGC0Ysg0L7QtNC40L3QsNC60L7QstGL0LVcclxuXHRcdFx0XHRcdGlmIChkYXRhR2FtZUZpcnN0ID09PSBkYXRhR2FtZVNlY29uZCkge1xyXG5cdFx0XHRcdFx0XHQvLyDRgdGC0LDQstC40Lwg0LfQsNC00LXRgNC20LrRgywg0YfRgtC+0LHRiyDQvdC1INCx0YvQu9C+INC80L7QvNC10L3RgtCw0LvRjNC90L7Qs9C+INC40YHRh9C10LfQvdC+0LLQtdC90LjRj1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdG9wZW5DYXJ0c1swXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHRcdFx0XHRcdFx0XHRvcGVuQ2FydHNbMV0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblx0XHRcdFx0XHRcdFx0b3BlbkNhcnRzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHRcdG9wZW5DYXJ0c1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0bGV0IGhpZGRlbkNhcnRzID0gdGhhdC5nYW1lRmllbGQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtaXRlbS5oaWRkZW4nKTtcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2FydHMgXHRcdFx0PSB0aGF0LmdhbWVGaWVsZC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1pdGVtJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8v0JXRgdC70Lgg0LrQsNGA0YLRiyDQutC+0L3Rh9C40LvQuNGB0YwgKNC40LPRgNC+0Log0L/QvtCx0LXQtNC40LspO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGhpZGRlbkNhcnRzLmxlbmd0aClcclxuXHRcdFx0XHRcdFx0XHRpZiAoaGlkZGVuQ2FydHMubGVuZ3RoID09PSBjYXJ0cy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGFsZXJ0KCfQktGLINC/0L7QsdC10LTQuNC70LghJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LnJlc2V0KCk7XHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdH0sNzAwKTtcclxuXHRcdFx0XHRcdH0gZWxzZXsgLy8g0LrQsNGA0YLRiyDQvdC1INGB0L7QstC/0LDQu9C4XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHRvcGVuQ2FydHNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdFx0b3BlbkNhcnRzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHR9LDcwMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLyDQmtC+0L/QuNGA0YPQtdC8INGE0YPQvdC60YbQuNGOINC+0LHRgNCw0LHQvtGC0YfQuNC6INCyINGB0LLQvtC50YHRgtCy0L4g0L7QsdGK0LXQutGC0LAsXHJcblx0XHQvLyDRh9GC0L7QsdGLINCy0LfQsNC40LzQvtC00LXQudGB0YLQstC+0LLQsNGC0Ywg0YEg0L3QuNC8INCyINC80LXRgtC+0LTQtSByZXNldFxyXG5cdFx0dGhpcy5tYWluQ2xpY2tGdW5jID0gbWFpbkNsaWNrRnVuYztcclxuXHR9O1xyXG5cclxuXHQvLyDQt9Cw0L/Rg9GB0LrQsNC10Lwg0YLQsNC50LzQtdGAXHJcblx0c3RhcnRUaW1lcih0aW1lVG9HYW1lLCBpc1Jlc2V0KXtcclxuXHRcdGxldCB0aW1lID0gdGltZVRvR2FtZSArPSAxO1xyXG5cdFx0bGV0IHRpbWVyO1xyXG5cclxuXHRcdGlmIChpc1Jlc2V0KSB7XHJcblx0XHRcdHRoaXMudGltZXIuaW5uZXJUZXh0ID0gYGA7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyDQstC+0LfQstGA0LDRidCw0LXQvCBpZCDRgtCw0LnQvNC10YDQsCwg0LrQvtGC0L7RgNGL0Lkg0LrQvtC/0LjRgNGD0LXRgtGB0Y9cclxuXHRcdC8vINCyINGB0LLQvtC50YHRgtCy0L4g0L7QsdGK0LXQutGC0LBcclxuXHRcdHJldHVybiB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0dGltZS0tO1xyXG5cdFx0XHR0aGlzLnRpbWVyLmlubmVyVGV4dCA9IGAke3RpbWV9INGB0LXQui5gO1xyXG5cclxuXHRcdFx0Ly/QstGA0LXQvNGPINCy0YvRiNC70L5cclxuXHRcdFx0aWYodGltZSA9PT0gMCl7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0XHRcdFx0YWxlcnQoJ9CS0YDQtdC80Y8g0LLRi9GI0LvQviA6KCcpO1xyXG5cdFx0XHRcdHRoaXMudGltZXIuaW5uZXJUZXh0ID0gYCR7dGltZX0g0YHQtdC60YPQvdC0YDtcclxuXHJcblx0XHRcdFx0dGhpcy5yZXNldCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LDEwMDApXHJcblx0fVxyXG5cclxuXHQvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQsNGA0YLRiyDQvdCwINC/0L7Qu9C1XHJcblx0Y3JlYXRlQ2FydChjbGVhckZpZWxkID0gZmFsc2Upe1xyXG5cclxuXHRcdC8vINC+0YfQuNGJ0LDQtdC8INC/0L7Qu9C1LCDQtdGB0LvQuCDQv9C10YDQtdC00LDQvSDQsNGC0YDQuNCx0YPRglxyXG5cdFx0Ly8gKNC40YHQv9C+0LvRjNC30YPQtdGC0YHRjyDQsiByZXNldClcclxuXHRcdGlmIChjbGVhckZpZWxkKSB7XHJcblx0XHRcdHRoaXMuZ2FtZUZpZWxkLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0J/QtdGA0LXQvNC10YjQuNCy0LDQtdC8INC60LDRgNGC0YtcclxuXHRcdGxldCBtYXBDYXJ0QXJyYXkgPSB0aGlzLmNyZWF0ZU1hcENhcnQoKTtcclxuXHJcblx0XHQvL9GB0L7Qt9C00LDQtdC8INC90LAg0L/QvtC70LUg0LrQsNGA0YLRi1xyXG5cdFx0bGV0IGFsbENhcnQgPSAnJztcclxuXHRcdGZvciAobGV0IGkgPSB0aGlzLm51bWJlck9mQ2FydDsgaSA+IDA7IGktLSkge1xyXG5cdFx0XHRhbGxDYXJ0ICs9IHRoaXMubGF5b3V0O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5nYW1lRmllbGQuaW5uZXJIVE1MID0gYWxsQ2FydDtcclxuXHJcblx0XHQvLyDQv9GA0L7RgdGC0LDQstC70Y/QtdC8INC60LDRgNGC0LDQvCDQtNCw0YLQsCDQsNGC0YDQuNCx0YPRgtGLXHJcblx0XHQvLyDQuCDQutCw0YDRgtC40L3QutC4XHJcblx0XHRsZXQgY2FydHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1pdGVtJyk7XHJcblx0XHRjYXJ0cy5mb3JFYWNoKChpdGVtLGluZGV4KSA9PiB7XHJcblx0XHRcdGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWdhbWUnLCBtYXBDYXJ0QXJyYXlbaW5kZXhdKTtcclxuXHJcblx0XHRcdGxldCBpbWcgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWl0ZW1fX2ltZycpO1xyXG5cdFx0XHRpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgYXNzZXRzX3Byb2QvaW1nLyR7bWFwQ2FydEFycmF5W2luZGV4XX0uanBnYCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8v0JLRi9C60LvRjtGH0LDQtdC8INC4INCy0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDIFwi0L3QsNGH0LDRgtGMINC40LPRgNGDXCJcclxuXHRjaGFuZ2VTdGFydEJ0bih2YWx1ZSl7XHJcblx0XHRpZiAodmFsdWUgPT09ICdkaXNhYmxlJykge1xyXG5cdFx0XHR0aGlzLnN0YXJ0QnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCdkaXNhYmxlZCcpO1xyXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2VuYWJsZScpe1xyXG5cdFx0XHR0aGlzLnN0YXJ0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRzdGFydEdhbWUoKXtcclxuXHRcdC8v0KHQvtC30LTQsNC10Lwg0LrQsNGA0YLRi1xyXG5cdFx0dGhpcy5jcmVhdGVDYXJ0KCk7XHJcblxyXG5cdFx0Ly/QuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC60LvQuNC6XHJcblx0XHRnYW1lLmFkZENsaWNrKCk7XHJcblxyXG5cdFx0Ly8g0L/QvtC00YDRg9Cx0LDQtdC8INGC0LDQudC80LXRgFxyXG5cdFx0dGhpcy50aW1lcklkID0gdGhpcy5zdGFydFRpbWVyKHRoaXMudGltZVRvR2FtZSk7XHJcblxyXG5cdFx0Ly/QktGL0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDINC90LDRh9Cw0LvQsCDQuNCz0YDRi1xyXG5cdFx0dGhpcy5jaGFuZ2VTdGFydEJ0bignZGlzYWJsZScpO1xyXG5cdFx0XHJcblx0fTtcclxuXHJcblx0cmVzZXQoKXtcclxuXHRcdC8vINC+0LHQvdC+0LLQu9GP0LXQvCDRgtCw0LnQvNC10YBcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lcigwLCB0cnVlKTtcclxuXHJcblx0XHQvL9CS0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDXHJcblx0XHR0aGlzLmNoYW5nZVN0YXJ0QnRuKCdlbmFibGUnKTtcclxuXHJcblx0XHQvL9Ce0YfQuNGJ0LDQtdC8INC/0L7Qu9C1XHJcblx0XHR0aGlzLmNyZWF0ZUNhcnQodHJ1ZSk7XHJcblxyXG5cdFx0Ly/Qo9C00LDQu9GP0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwXHJcblx0XHR0aGlzLmdhbWVGaWVsZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFpbkNsaWNrRnVuYyk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmxldCBnYW1lID0gbmV3IEdhbWUoOCk7XHJcblxyXG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0Z2FtZS5zdGFydEdhbWUoKTtcclxufSk7XHJcblxyXG59KCkpOyJdfQ==
