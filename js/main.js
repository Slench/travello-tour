$(document).ready(function() {
    $('.form-date__body').click(function(){
        $('.form__date').toggleClass('active');
        $('.form-date__body').toggleClass('disable');
    });
});

const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

// Основная функция
function initRatings() {
	let ratingActive, ratingValue;
	// "Бегаем" по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
	// Возможность указать оценку 
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// Обновление переменных
				initRatingVars(rating);
				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				// Обновление переменных
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					// "Отправить" на сервер
					setRatingValue(ratingItem.value, rating);
				} else {
					// Отобразить указанную оцнку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}
}

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 4,
    centeredSlides: true,
	grabCursor: true,
	loop: false,
	rewind: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	  },
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		280: {
			slidesPerView: 1,
			loop: true,
			centeredSlides: false,
			spaceBetween: 40,
		},
		450: {
			slidesPerView: 1,
			loop: true,
			centeredSlides: false,
			spaceBetween: 40,
			loop: false,
		},
		768: {
			spaceBetween: 20,
			slidesPerView: 2,
			centeredSlides: false,
		},
		1000: {
			spaceBetween: 0,
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		},
	}
	}
);


(function() {
	
	const now = new Date();

	const hBox = document.querySelector('.hour'),
		  mBox = document.querySelector('.minutes'),
		  sBox = document.querySelector('.seconds');

	let times = [
			23 - now.getHours(),
			59 - now.getMinutes(),
			59 - now.getSeconds(),
		];

	const timer = times => {
		
		let tm = setInterval(() => {
			
			times[2]--;

			
			if (times[0] == 0 && times[1] == 0 && times[2] == 0) {
				clearInterval(tm);
			} else if (times[2] == -1) {			
				times[2] = 59;
				times[1]--;
			} else if (times[1] == -1) {
				times[1] = 59;
				times[0]--;
			}

			let h = (times[0] < 10) ? '0' + times[0] : times[0],
				m = (times[1] < 10) ? '0' + times[1] : times[1],
				s = (times[2] < 10) ? '0' + times[2] : times[2];

			showTimer(h, m, s);
		}, 1000);
	}

	const showTimer = (hour, min, sec) => {
		hBox.innerHTML = hour;
		mBox.innerHTML = min;
		sBox.innerHTML = sec;
	}

	timer(times);
})();

(function() {
	
	const now = new Date();

	const hBox = document.querySelector('.hour-1'),
		  mBox = document.querySelector('.minutes-1'),
		  sBox = document.querySelector('.seconds-1');

	let times = [
			23 - now.getHours(),
			59 - now.getMinutes(),
			59 - now.getSeconds(),
		];

	const timer = times => {
		
		let tm = setInterval(() => {
			
			times[2]--;

			
			if (times[0] == 0 && times[1] == 0 && times[2] == 0) {
				clearInterval(tm);
			} else if (times[2] == -1) {			
				times[2] = 59;
				times[1]--;
			} else if (times[1] == -1) {
				times[1] = 59;
				times[0]--;
			}

			let h = (times[0] < 10) ? '0' + times[0] : times[0],
				m = (times[1] < 10) ? '0' + times[1] : times[1],
				s = (times[2] < 10) ? '0' + times[2] : times[2];

			showTimer(h, m, s);
		}, 1000);
	}

	const showTimer = (hour, min, sec) => {
		hBox.innerHTML = hour;
		mBox.innerHTML = min;
		sBox.innerHTML = sec;
	}

	timer(times);
})();

(function() {
	
	const now = new Date();

	const hBox = document.querySelector('.hour-2'),
		  mBox = document.querySelector('.minutes-2'),
		  sBox = document.querySelector('.seconds-2');

	let times = [
			23 - now.getHours(),
			59 - now.getMinutes(),
			59 - now.getSeconds(),
		];

	const timer = times => {
		
		let tm = setInterval(() => {
			
			times[2]--;

			
			if (times[0] == 0 && times[1] == 0 && times[2] == 0) {
				clearInterval(tm);
			} else if (times[2] == -1) {			
				times[2] = 59;
				times[1]--;
			} else if (times[1] == -1) {
				times[1] = 59;
				times[0]--;
			}

			let h = (times[0] < 10) ? '0' + times[0] : times[0],
				m = (times[1] < 10) ? '0' + times[1] : times[1],
				s = (times[2] < 10) ? '0' + times[2] : times[2];

			showTimer(h, m, s);
		}, 1000);
	}

	const showTimer = (hour, min, sec) => {
		hBox.innerHTML = hour;
		mBox.innerHTML = min;
		sBox.innerHTML = sec;
	}

	timer(times);
})();

(function() {
	
	const now = new Date();

	const hBox = document.querySelector('.hour-3'),
		  mBox = document.querySelector('.minutes-3'),
		  sBox = document.querySelector('.seconds-3');

	let times = [
			23 - now.getHours(),
			59 - now.getMinutes(),
			59 - now.getSeconds(),
		];

	const timer = times => {
		
		let tm = setInterval(() => {
			
			times[2]--;

			
			if (times[0] == 0 && times[1] == 0 && times[2] == 0) {
				clearInterval(tm);
			} else if (times[2] == -1) {			
				times[2] = 59;
				times[1]--;
			} else if (times[1] == -1) {
				times[1] = 59;
				times[0]--;
			}

			let h = (times[0] < 10) ? '0' + times[0] : times[0],
				m = (times[1] < 10) ? '0' + times[1] : times[1],
				s = (times[2] < 10) ? '0' + times[2] : times[2];

			showTimer(h, m, s);
		}, 1000);
	}

	const showTimer = (hour, min, sec) => {
		hBox.innerHTML = hour;
		mBox.innerHTML = min;
		sBox.innerHTML = sec;
	}

	timer(times);
})();

(function() {
	
	const now = new Date();

	const hBox = document.querySelector('.hour-4'),
		  mBox = document.querySelector('.minutes-4'),
		  sBox = document.querySelector('.seconds-4');

	let times = [
			23 - now.getHours(),
			59 - now.getMinutes(),
			59 - now.getSeconds(),
		];

	const timer = times => {
		
		let tm = setInterval(() => {
			
			times[2]--;

			
			if (times[0] == 0 && times[1] == 0 && times[2] == 0) {
				clearInterval(tm);
			} else if (times[2] == -1) {			
				times[2] = 59;
				times[1]--;
			} else if (times[1] == -1) {
				times[1] = 59;
				times[0]--;
			}

			let h = (times[0] < 10) ? '0' + times[0] : times[0],
				m = (times[1] < 10) ? '0' + times[1] : times[1],
				s = (times[2] < 10) ? '0' + times[2] : times[2];

			showTimer(h, m, s);
		}, 1000);
	}

	const showTimer = (hour, min, sec) => {
		hBox.innerHTML = hour;
		mBox.innerHTML = min;
		sBox.innerHTML = sec;
	}

	timer(times);
})();

(function() {
	
	const now = new Date();

	const hBox = document.querySelector('.hour-5'),
		  mBox = document.querySelector('.minutes-5'),
		  sBox = document.querySelector('.seconds-5');

	let times = [
			23 - now.getHours(),
			59 - now.getMinutes(),
			59 - now.getSeconds(),
		];

	const timer = times => {
		
		let tm = setInterval(() => {
			
			times[2]--;

			
			if (times[0] == 0 && times[1] == 0 && times[2] == 0) {
				clearInterval(tm);
			} else if (times[2] == -1) {			
				times[2] = 59;
				times[1]--;
			} else if (times[1] == -1) {
				times[1] = 59;
				times[0]--;
			}

			let h = (times[0] < 10) ? '0' + times[0] : times[0],
				m = (times[1] < 10) ? '0' + times[1] : times[1],
				s = (times[2] < 10) ? '0' + times[2] : times[2];

			showTimer(h, m, s);
		}, 1000);
	}

	const showTimer = (hour, min, sec) => {
		hBox.innerHTML = hour;
		mBox.innerHTML = min;
		sBox.innerHTML = sec;
	}

	timer(times);
})();