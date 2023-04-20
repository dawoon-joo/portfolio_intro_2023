const wrap = document.querySelector('.history_career');
const box = wrap.querySelector('.rightBox');
const btns = box.querySelectorAll('li .title');

btns.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		activeToggle(e);
	});
});

function activeToggle(e) {
	let isOn = e.currentTarget.closest('li').classList.contains('on');
	if (isOn) {
		e.currentTarget.closest('li').classList.remove('on');
	} else {
		e.currentTarget.closest('li').classList.add('on');
	}
}
