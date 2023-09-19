// 290 ширина 625 высота телефона


const playBtn = document.querySelector('.playBtn')
const btnNightFirst = document.querySelector('.btnNightFirst')
const btnNightSecond = document.querySelector('.btnNightSecond')
const btnNightThird = document.querySelector('.btnNightThird')
const nightsNumberId = document.querySelector('.nightsNumberId')
const mainGame = document.querySelector('.mainGame')
const energyText = document.querySelector('.energy')
const timeText = document.querySelector('.time')
const leftDoorText = document.querySelector('.leftLockOpenDoor')
const rightDoorText = document.querySelector('.rightLockOpenDoor')
const cameraText = document.querySelector('.camera')
const body = document.querySelector('body')
const name = document.querySelector('.name')
const mainCamera1 = document.querySelector('.mainCamera1')
const mainCamera2 = document.querySelector('.mainCamera2')
const mainCamera3 = document.querySelector('.mainCamera3')
const doorsLockOpenMain = document.querySelector('.doorsLockOpenMain')
const timeAndEnergy = document.querySelector('.timeAndEnergy')
const player = document.querySelector('.player')
const cam1 = document.querySelector('.cam1')
const cam2 = document.querySelector('.cam2')
const cam3 = document.querySelector('.cam3')
const cam4 = document.querySelector('.cam4')
const cam5 = document.querySelector('.cam5')
const cam6 = document.querySelector('.cam6')
const cam7 = document.querySelector('.cam7')
const cam8 = document.querySelector('.cam8')
const leftDoorAudio = new Audio('./audio/door.wav')
const rightDoorAudio = new Audio('./audio/door.wav')
const dingDong = new Audio('./audio/dingDong.wav')
const zeroEnergy = new Audio('./audio/zeroEnergy.wav')
const scrimer = new Audio('./audio/scrimer.wav')
const knockKnock = new Audio('./audio/knockKnock.wav')
const bgMusic = new Audio('./audio/bgMusic.wav')
const bgCamsMusic = new Audio('./audio/bgCamsMusic.wav')
const switchCam = new Audio('./audio/switchCam.wav')
const scrimerPicture = document.querySelector('.scrimerPicture')
const scrimerMain = document.querySelector('.scrimer')

bgMusic.loop = true
bgCamsMusic.loop = true
leftDoorAudio.volume = 0.3
rightDoorAudio.volume = 0.3
scrimer.volume = 0.01
bgMusic.volume = 0.5
bgCamsMusic.volume = 0.4
switchCam.volume = 0.5

// .pause



let cameraPressed = false
let leftDoorPressed = false
let rightDoorPressed = false
let leftDoorConsumer = 0
let rightDoorConsumer = 0
let cameraConsumer = 0
let time = 0 // кароче время считать
let energy = 100 // кароче энергию считать
let sumOfConsumers
const passiveConsumer = 1

let helpDirection2
let direction2 = 0
let chorshanba = 0
let shibyaqqqov = 0

function shibyaqqqovScrimer(){
	cameraPressed = true 
	cameraPress()
	


	clearInterval(hoursIntervalId)
	clearInterval(energyIntervalId)
	clearInterval(animatronixIntervalId)
	bgMusic.pause()
	scrimerMain.classList.remove('none')
	scrimerMain.classList.add('flex')
	scrimerPicture.classList.add('shibyaqqqovScrimer')
	

	setTimeout(function(){
		scrimer.play()
	},3000)
	
	setTimeout(function(){
		location.reload()
	}, 8000)
	
}
function chorshanbaScrimer(){
	cameraPressed = true 
	cameraPress()
	
	clearInterval(hoursIntervalId)
	clearInterval(energyIntervalId)
	clearInterval(animatronixIntervalId)
	bgMusic.pause()
	scrimerMain.classList.remove('none')
	scrimerMain.classList.add('flex')

	scrimerPicture.classList.add('chorshanbaScrimer')
	

	setTimeout(function(){
		scrimer.play()
	},3000)
	
	setTimeout(function(){
		location.reload()
	}, 8000)
}


body.classList.add('startBackground')

function animatronixLife() {
	
	animatronixIntervalId = setInterval(function(){
		let direction1 = Math.floor(Math.random() * 8);
		direction2++
		if (direction2 == 8) {
			direction2 = 1
		}
		
		


		
		if (shibyaqqqov == 6 && leftDoorPressed == false || shibyaqqqov == 7 && rightDoorPressed == false ) {
			shibyaqqqovScrimer()
		} else if (shibyaqqqov == 6 && leftDoorPressed == true || shibyaqqqov == 7 && rightDoorPressed == true ) {
			console.log('Тук-тук')
			knockKnock.play()
		} else {
			console.log(`вдалеке слышны шаги`)
		}
		if (chorshanba == 6 && leftDoorPressed == false || chorshanba == 7 && rightDoorPressed == false ) {
			chorshanbaScrimer()
		} else if (chorshanba == 6 && leftDoorPressed == true || chorshanba == 7 && rightDoorPressed == true ) {
			console.log('Тук-тук')
			knockKnock.play()
		} else {
			console.log(`вдалеке слышны шаги`)
		}
		shibyaqqqov = direction1
		chorshanba = direction2
		console.log(`первый аниметроник ${shibyaqqqov}`)
		console.log(`чоршанба адамс${chorshanba}`)

	}, 15000)
}




function lostEnergy() {
	bgMusic.pause()
	clearInterval(hoursIntervalId)
	clearInterval(energyIntervalId)
	clearInterval(animatronixIntervalId)
	leftDoorPressed = true
	rightDoorPressed = true
	cameraPressed = true 
	cameraPress()
	leftDoorPress()
	rightDoorPress()
	

	setTimeout(function(){
		body.classList.remove('standartBackground')
		body.classList.add('loseBackground')
		zeroEnergy.play()
	}, 500)
	setTimeout(function(){
				
		console.log('типа ВАУ СКРИМЕР КАК СТРАШНО')
		shibyaqqqovScrimer()
	}, 23000)
	setTimeout(function(){
		console.log('ЛОКАТИОН.РЕЛОАД()')
		location.reload()
	}, 27000)
	

}	


function gameOverWin() {
	bgMusic.pause()
	clearInterval(hoursIntervalId)
	clearInterval(energyIntervalId)
	clearInterval(animatronixIntervalId)
	dingDong.play()
	setTimeout(function () {
		location.reload()
	}, 15000)
	
	


}


function cameraPress() {
	if (cameraPressed == false) {
		cameraPressed = true
		body.classList.add('standartBackground')
		bgCamsMusic.play()
		bgMusic.pause()


		cameraConsumer = 1

		timeAndEnergy.classList.remove('flex')
		doorsLockOpenMain.classList.remove('flex')
		timeAndEnergy.classList.add('none')
		doorsLockOpenMain.classList.add('none')
		
		cameraText.innerText = `BACK`
		console.log('camera otkrita')

		mainCamera1.classList.add('flex')
		mainCamera1.classList.remove('none')
		mainCamera2.classList.add('flex')
		mainCamera2.classList.remove('none')
		mainCamera3.classList.add('flex')
		mainCamera3.classList.remove('none')
		player.classList.remove('none')
	} else if (cameraPressed == true) {
		cameraPressed = false
		cameraText.innerText = `CAMERA`
		bgCamsMusic.pause()
		bgMusic.play()


		removeAllBG()

		cameraConsumer = 0



		body.classList.add('standartBackground')

		timeAndEnergy.classList.add('flex')
		doorsLockOpenMain.classList.add('flex')
		timeAndEnergy.classList.remove('none')
		doorsLockOpenMain.classList.remove('none')


		mainCamera1.classList.remove('flex')
		mainCamera1.classList.add('none')
		mainCamera2.classList.remove('flex')
		mainCamera2.classList.add('none')
		mainCamera3.classList.remove('flex')
		mainCamera3.classList.add('none')
		player.classList.add('none')
		console.log('camera zakrita')
	}
	
	
}
function gameOverLose() {
	clearInterval(hoursIntervalId)
	clearInterval(energyIntervalId)
	clearInterval(animatronixIntervalId)
	bgMusic.pause()

	
	mainGame.classList.add('none')


	setTimeout(function(){
		scrimerFunction()
	
	}, 100)
	setTimeout(function(){
		location.reload()
	}, 4000)
	

}
function leftDoorPress() {
	if (leftDoorPressed == false) {
		leftDoorPressed = true
		leftDoorConsumer += 1
		console.log(`левая дверь закрыта вы потеряли чуть энергии`)
		leftDoorText.innerText = `OPEN`
		energy += -1
		leftDoorText.classList.add('colorGreen')
		leftDoorText.classList.remove('colorRed')


	} else if (leftDoorPressed == true) {
		leftDoorPressed = false 
		leftDoorConsumer += -1
		console.log(`левая дверь открыта`)
		leftDoorText.innerText = `LOCK`

		leftDoorText.classList.remove('colorGreen')
		leftDoorText.classList.add('colorRed')
	}
	console.log(`вы коснулись левой двери и потеряли чутка жнергии`)

	leftDoorAudio.play()
	
}
function rightDoorPress() {
	if (rightDoorPressed == false) {
		rightDoorPressed = true
		rightDoorConsumer += 1
		console.log(`правая дверь закрыта вы потеряли чуть энергии`)
		rightDoorText.innerText = `OPEN`
		energy += -1

		rightDoorText.classList.add('colorGreen')
		rightDoorText.classList.remove('colorRed')
	} else if (rightDoorPressed == true) {
		rightDoorPressed = false 
		rightDoorConsumer += -1
		console.log(`правая дверь открыта`)
		rightDoorText.innerText = `LOCK`

		rightDoorText.classList.remove('colorGreen')
		rightDoorText.classList.add('colorRed')
	}
	

	rightDoorAudio.play()

}

function playBtnPressed () {
	name.classList.add('none')
	playBtn.classList.add('none')
	btnNightFirst.classList.remove('none')
	btnNightSecond.classList.remove('none')
	btnNightThird.classList.remove('none')
	btnNightFirst.classList.add('visibleBtnNight')
	btnNightSecond.classList.add('visibleBtnNight')
	btnNightThird.classList.add('visibleBtnNight')

}
function gameStarted() {
	body.classList.add('standartBackground')
	body.classList.remove('startBackground')
	bgMusic.play()

	hoursIntervalId = setInterval(function(){
		time += 1
		if (time == 1) {
			timeText.innerText = `TIME: 01:00`
		} else if (time == 2) {
			timeText.innerText = `TIME: 02:00`
		} else if (time == 3) {
			timeText.innerText = `TIME: 03:00`
		} else if (time == 4) {
			timeText.innerText = `TIME: 04:00`
		} else if (time == 5) {
			timeText.innerText = `TIME: 05:00`
		} else if (time == 6) {
			timeText.innerText = `ПОБЕДА`
			gameOverWin()
			
		}
		console.log(`прошел 1 час типа ${time}`)
	}, 48000) // сетИнтервал который обновляет время (+1 час за 48 секунд)

	energyIntervalId = setInterval(function(){
		sumOfConsumers = leftDoorConsumer + rightDoorConsumer + cameraConsumer + passiveConsumer
		energy += -sumOfConsumers
		
		energyText.innerText = `ENERGY:${energy}%`
		if (energy < 0) {
			lostEnergy()

		}

	}, 8000)



}
function nightReady () {
	btnNightFirst.classList.add('none')
	btnNightSecond.classList.add('none')
	btnNightThird.classList.add('none')
	nightsNumberId.classList.add('none')
	nightsNumberId.classList.remove('nightsNumber')
	mainGame.classList.remove('none')

}
playBtn.addEventListener('click', function(){
	playBtnPressed()
})
btnNightFirst.addEventListener('click', function(){
	nightReady()
	gameStarted()
	animatronixLife()
})
leftDoorText.addEventListener('click', function(){

	if (energy > 0) {
		leftDoorPress()
	}
	
})
rightDoorText.addEventListener('click', function(){
	if (energy > 0) {
		rightDoorPress()
	}
	
})
cameraText.addEventListener('click', function(){
	if (energy > 0) {
		cameraPress()
	}
	
})
cam1.addEventListener('click', function(){
	addBackgroundOnCam1()

	switchCam.play()
})
cam2.addEventListener('click', function(){
	addBackgroundOnCam2()
	
	switchCam.play()
})
cam3.addEventListener('click', function(){
	addBackgroundOnCam3()
	
	switchCam.play()
})
cam4.addEventListener('click', function(){
	addBackgroundOnCam4()

	switchCam.play()
})
cam5.addEventListener('click', function(){
	addBackgroundOnCam5()

	switchCam.play()
})
cam6.addEventListener('click', function(){
	addBackgroundOnCam6()

	switchCam.play()
})
cam7.addEventListener('click', function(){
	addBackgroundOnCam7()
	
	switchCam.play()
})
cam8.addEventListener('click', function(){
	addBackgroundOnCam8()
	
	switchCam.play()
})

function removeAllBG() {
	body.classList.remove('standartBackground')
	body.classList.remove('loseBackground')

	body.classList.remove('chorshanbaBackgroundCam__1')
	body.classList.remove('chorshanbaBackgroundCam__2')
	body.classList.remove('chorshanbaBackgroundCam__3')
	body.classList.remove('chorshanbaBackgroundCam__4')
	body.classList.remove('chorshanbaBackgroundCam__5')
	body.classList.remove('chorshanbaBackgroundCam__6')
	body.classList.remove('chorshanbaBackgroundCam__7')
	body.classList.remove('chorshanbaBackgroundCam__8')

	body.classList.remove('shibyaqqqovBackgroundCam__1')
	body.classList.remove('shibyaqqqovBackgroundCam__2')
	body.classList.remove('shibyaqqqovBackgroundCam__3')
	body.classList.remove('shibyaqqqovBackgroundCam__4')
	body.classList.remove('shibyaqqqovBackgroundCam__5')
	body.classList.remove('shibyaqqqovBackgroundCam__6')
	body.classList.remove('shibyaqqqovBackgroundCam__7')
	body.classList.remove('shibyaqqqovBackgroundCam__8')

	body.classList.remove('backgroundCam__1')
	body.classList.remove('backgroundCam__2')
	body.classList.remove('backgroundCam__3')
	body.classList.remove('backgroundCam__4')
	body.classList.remove('backgroundCam__5')
	body.classList.remove('backgroundCam__6')
	body.classList.remove('backgroundCam__7')
	body.classList.remove('backgroundCam__8')

	body.classList.remove('doubleBackgroundCam__1')
	body.classList.remove('doubleBackgroundCam__2')
	body.classList.remove('doubleBackgroundCam__3')
	body.classList.remove('doubleBackgroundCam__4')
	body.classList.remove('doubleBackgroundCam__5')
	body.classList.remove('doubleBackgroundCam__6')
	body.classList.remove('doubleBackgroundCam__7')
	body.classList.remove('doubleBackgroundCam__8')

}


function addBackgroundOnCam1() {
	if (shibyaqqqov == 0 && chorshanba == 0) {
		removeAllBG()
		body.classList.add('doubleBackgroundCam__1')
	} else if (shibyaqqqov == 0) {
		removeAllBG()
		body.classList.add('shibyaqqqovBackgroundCam__1')
	} else if (chorshanba == 0) {
		removeAllBG()
		body.classList.add('chorshanbaBackgroundCam__1')
	} else {
		removeAllBG()
		body.classList.add('backgroundCam__1')
	}
}
function addBackgroundOnCam2() {
	if (shibyaqqqov == 1 && chorshanba == 1) {
		removeAllBG()
		body.classList.add('doubleBackgroundCam__2')
	} else if (shibyaqqqov == 1) {
		removeAllBG()
		body.classList.add('shibyaqqqovBackgroundCam__2')
	} else if (chorshanba == 1) {
		removeAllBG()
		body.classList.add('chorshanbaBackgroundCam__2')
	} else {
		removeAllBG()
		body.classList.add('backgroundCam__2')
	}
}
function addBackgroundOnCam3() {
	if (shibyaqqqov == 2 && chorshanba == 2) {
		removeAllBG()
		body.classList.add('doubleBackgroundCam__3')
	} else if (shibyaqqqov == 2) {
		removeAllBG()
		body.classList.add('shibyaqqqovBackgroundCam__3')
	} else if (chorshanba == 2) {
		removeAllBG()
		body.classList.add('chorshanbaBackgroundCam__3')
	} else {
		removeAllBG()
		body.classList.add('backgroundCam__3')
	}
}
function addBackgroundOnCam4() {
	if (shibyaqqqov == 3 && chorshanba == 3) {
		removeAllBG()
		body.classList.add('doubleBackgroundCam__4')
	} else if (shibyaqqqov == 3) {
		removeAllBG()
		body.classList.add('shibyaqqqovBackgroundCam__4')
	} else if (chorshanba == 3) {
		removeAllBG()
		body.classList.add('chorshanbaBackgroundCam__4')
	} else {
		removeAllBG()
		body.classList.add('backgroundCam__4')
	}
}
function addBackgroundOnCam5() {
	if (shibyaqqqov == 4 && chorshanba == 4) {
		removeAllBG()
		body.classList.add('doubleBackgroundCam__5')
	} else if (shibyaqqqov == 4) {
		removeAllBG()
		body.classList.add('shibyaqqqovBackgroundCam__5')
	} else if (chorshanba == 4) {
		removeAllBG()
		body.classList.add('chorshanbaBackgroundCam__5')
	} else {
		removeAllBG()
		body.classList.add('backgroundCam__5')
	}
}
function addBackgroundOnCam6() {
	if (shibyaqqqov == 5 && chorshanba == 5) {
		removeAllBG()
		body.classList.add('doubleBackgroundCam__6')
	} else if (shibyaqqqov == 5) {
		removeAllBG()
		body.classList.add('shibyaqqqovBackgroundCam__6')
	} else if (chorshanba == 5) {
		removeAllBG()
		body.classList.add('chorshanbaBackgroundCam__6')
	} else {
		removeAllBG()
		body.classList.add('backgroundCam__6')
	}
}
function addBackgroundOnCam7() {
	if (shibyaqqqov == 6 && chorshanba == 6) {
		removeAllBG()
		body.classList.add('doubleBackgroundCam__7')
	} else if (shibyaqqqov == 6) {
		removeAllBG()
		body.classList.add('shibyaqqqovBackgroundCam__7')
	} else if (chorshanba == 6) {
		removeAllBG()
		body.classList.add('chorshanbaBackgroundCam__7')
	} else {
		removeAllBG()
		body.classList.add('backgroundCam__7')
	}
}
function addBackgroundOnCam8() {
	if (shibyaqqqov == 7 && chorshanba == 7) {
		removeAllBG()
		body.classList.add('doubleBackgroundCam__8')
	} else if (shibyaqqqov == 7) {
		removeAllBG()
		body.classList.add('shibyaqqqovBackgroundCam__8')
	} else if (chorshanba == 7) {
		removeAllBG()
		body.classList.add('chorshanbaBackgroundCam__8')
	} else {
		removeAllBG()
		body.classList.add('backgroundCam__8')
	}
}





btnNightSecond.addEventListener('click', function(){
	btnNightSecond.innerText = ``
	btnNightFirst.innerText = ``
	btnNightThird.innerText = ``
	nightsNumberId.innerText = `азат крутой`
	setTimeout(function(){
		location.reload()
	}, 1000)
})











