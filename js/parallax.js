"use strict"

// Ждем загрузку контента
window.onload = function () {
	const parallax = document.querySelector('.parallax');

	if (parallax) {
		const content = document.querySelector('.header__container');
		const clouds = document.querySelector('.images-parallax__sky');
		const mountains = document.querySelector('.images-parallax__mountains');
		const human = document.querySelector('.images-parallax__human');

		// Коэффициенты
		const forClouds = 15;
		const forMountains = 15;
		const forHuman = 20;

		// Скорость анимации
		const speed = 0.05;

		// Объявление переменных
		let positionX = 0, positionY = 0;
		let coordXprocent = 0, coordYprocent = 0;

		function setMouseParallaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			// Передаем стили
			clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
			mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;
			human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener("mousemove", function (e) {
			// Получение ширины и высоты блока
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			// Ноль по середине
			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			// Получаем проценты
			coordXprocent = coordX / parallaxWidth * 100;
			coordYprocent = coordY / parallaxHeight * 100;
		});

		
	}
}