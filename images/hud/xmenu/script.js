document.body.addEventListener('contextmenu', e => e.preventDefault() & e.stopPropagation());
document.body.addEventListener('mousemove', onMouseMove);
document.body.addEventListener('touchmove', e => onMouseMove(e.touches[0]));

let showing, anchorX, anchorY, min = 100;
const wheel = document.querySelector('.wheel');

function showXMenu() {
	showing = true;

	var x = window.innerWidth / 2;
	var y = window.innerHeight / 2;

	anchorX = x;
	anchorY = y;
	
	wheel.style.setProperty('--x', `${x}px`);
	wheel.style.setProperty('--y', `${y}px`);
	wheel.classList.add('on');
}

function hideXMenu() {
	showing = false;
	wheel.setAttribute('data-chosen', 0);
	wheel.classList.remove('on');
}

function addWheelItem(text, icon) {
	
	document.getElementById("menuItems").innerHTML += "<div class='arc'><i class='"+ icon + "'></i><p class='text'>" + text + "</p></div>";

}


function onMouseMove({ clientX: x, clientY: y }) {
	if (!showing) return;

	let dx = x - anchorX;
	let dy = y - anchorY;
	let mag = Math.sqrt(dx * dx + dy * dy);
	let index = 0;

	if (mag >= min) {
		let deg = Math.atan2(dy, dx) + 0.625 * Math.PI;
		while (deg < 0) deg += Math.PI * 2;
		index = Math.floor(deg / Math.PI * 4) + 1;
	}

	wheel.setAttribute('data-chosen', index);
}