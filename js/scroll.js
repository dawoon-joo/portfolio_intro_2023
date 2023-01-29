const sections = document.querySelectorAll('.scroll_view');
const scroll = document.querySelector('.gnb_scroll');
const scroll_lis = scroll.querySelectorAll('li');
const gnbMo = document.querySelector('#gnbMo');
const gnbMo_lis = gnbMo.querySelectorAll('li');
const scroll_reset = document.querySelector('.scroll_reset');
let posArr = [];

getPos();
window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

function getPos() {
	posArr = [];
	for (let el of sections) {
		posArr.push(el.offsetTop);
	}
}
window.addEventListener('resize', getPos);
window.addEventListener('scroll', () => {
	let scroll = window.scrollY || window.pageYOffset;
	sections.forEach((el, index) => {
		if (scroll >= posArr[index]) {
			scroll_lis.forEach((el, index) => {
				el.classList.remove('on');
				sections[index].classList.remove('on');
			});

			scroll_lis[index].classList.add('on');
			sections[index].classList.add('on');
		}
	});

	let gnbMo = window.scrollY || window.pageYOffset;
	sections.forEach((el, index) => {
		if (gnbMo >= posArr[index]) {
			gnbMo_lis.forEach((el, index) => {
				el.classList.remove('on');
				sections[index].classList.remove('on');
			});

			gnbMo_lis[index].classList.add('on');
			sections[index].classList.add('on');
		}
	});

	if (scroll > 0) {
		scroll_reset.classList.add('on');
	} else {
		scroll_reset.classList.remove('on');
	}
});

scroll_lis.forEach((el, index) => {
	el.addEventListener('click', () => {
		new Anim(window, {
			prop: 'scroll',
			value: posArr[index],
			duration: 500,
		});
	});
});

gnbMo_lis.forEach((el, index) => {
	el.addEventListener('click', () => {
		new Anim(window, {
			prop: 'scroll',
			value: posArr[index],
			duration: 500,
		});
	});
});

scroll_reset.addEventListener('click', () => {
	new Anim(window, {
		prop: 'scroll',
		value: 0,
		duration: 500,
	});
});
