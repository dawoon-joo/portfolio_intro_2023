const frame = document.querySelector('.frame');
const article = frame.querySelector('article');
const lines = frame.querySelectorAll('.line');
const line = frame.querySelector('.line');
const bgs = frame.querySelectorAll('.bg');
const txtBox = article.querySelector('.txtBox');
const header = document.querySelector('header');
const h1 = header.querySelector('h1 a');

const num = 10;
const delay = 500;
insertDivs(0.05);
insertLine();
setTimeout(() => article.classList.add('on'), delay);
setTimeout(() => header.classList.add('on'), delay);

function insertDivs(interval) {
	bgs.forEach((bg) => {
		let tags = '';
		for (let i = 0; i < num; i++) {
			tags += `<div style='transition-delay:${interval * i}s; clip-path: polygon(${(100 / num) * i}% 0%, ${(100 / num) * (i + 1)}% 0%, ${
				(100 / num) * (i + 1)
			}% 100%, ${(100 / num) * i}% 100%)'></div>`;

			txtBox.style.transitionDelay = `${interval * 2 * i}s`;
			h1.style.transitionDelay = `${interval * 3 * i}s`;
			line.style.transitionDelay = `${interval * i}s`;
		}
		bg.innerHTML = tags;
	});
}

function insertLine() {
	lines.forEach((line) => {
		let tags = '';
		for (let i = 0; i < num; i++) tags += `<div style='width:${100 / num}%; left: ${(100 / num) * i}%'></div>`;
		line.innerHTML = tags;
	});
}

const btnCall = document.querySelector('.btnCall');
const menuMo = document.querySelector('.menuMo');
const menuMo_btn = menuMo.querySelector('.close');

menuMo_btn.onclick = function () {
	menuMo.classList.remove('on');
	btnCall.classList.remove('on');
};

btnCall.onclick = function (e) {
	e.preventDefault();
	btnCall.classList.toggle('on');
	menuMo.classList.toggle('on');
};

var swiper = new Swiper('.mySwiper', {
	effect: 'cards',
	grabCursor: true,
});
