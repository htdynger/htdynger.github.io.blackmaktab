let counter
const number = document.querySelector('.counter')
const btn0 = document.querySelector('.Btn0')
const btn1 = document.querySelector('.Btn1')


if (localStorage.getItem('counter')) {
	console.log('все оказалось созраненое')
	counter = Number(localStorage.getItem('counter'))
	number.innerText = counter
} else {
	console.log('ниче не сохранилось')
	localStorage.setItem('counter', counter)
	counter = 0
	number.innerText = counter
}

function funBtn0 () {
	console.log('Минус 1')
	counter += -1
	number.innerText = counter
	localStorage.setItem('counter', counter)
}
function funBtn1 () {
	console.log('Плюс 1')
	counter += 1
	number.innerText = counter
	localStorage.setItem('counter', counter)
}


btn0.addEventListener('click', function () {
	funBtn0()
})
btn1.addEventListener('click', function () {
	funBtn1()
})