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
		for (let el of btns) {
			el.closest('li').classList.remove('on');
		}
		e.currentTarget.closest('li').classList.add('on');
	}
}
