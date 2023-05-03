//your JS code here. If required.
let timeTakenP1 = 0, timeTakenP2 = 0, timeTakenP3 = 0;
function promise1() {
	const startTime = performance.now();
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('1'), getRandomIntInclusive(1, 3) * 1000)
	}).then((value) => {
	const endTime = performance.now();
	timeTakenP1 = endTime - startTime;
	})
}

function promise2() {
	const startTime = performance.now();
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('2'), getRandomIntInclusive(1, 3) * 1000)
	}).then((value) => {
	const endTime = performance.now();
	timeTakenP2 = endTime - startTime;
	})
}

function promise3() {
	const startTime = performance.now();
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('3'), getRandomIntInclusive(1, 3) * 1000)
	}).then((value) => {
	const endTime = performance.now();
	timeTakenP3 = endTime - startTime;
	})
}

Promise.all([promise1(), promise2(), promise3()]).then(() => {
	document.getElementById('pv-1').innerText = timeTakenP1 / 1000;
	document.getElementById('pv-2').innerText = timeTakenP2 / 1000;
	document.getElementById('pv-3').innerText = timeTakenP3 / 1000;
	document.getElementById('total').innerText = (timeTakenP1 + timeTakenP2 + timeTakenP3) / 1000;
})

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
