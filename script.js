const menuButtonPlay = document.querySelector('.main-menu__button')
const menuMain = document.querySelector('.main-menu')
const menuStats = document.querySelector('.menu-stats')
const menuSkins = document.querySelector('.menu-skins')
const menuWinText = document.querySelector('.win-menu__text')
const menuStatsImage = document.querySelector('.menu-stats__image')

const menuWinImage = document.querySelector('.win-menu__image')


const menuMusic = new Audio('audio/MenuMusic.mp3')
const playMusic_0 = new Audio('audio/PlayMusic_0.mp3')
const playMusic_1 = new Audio('audio/PlayMusic_1.mp3')

menuMusic.loop = true
playMusic_0.loop = true
playMusic_1.loop = true

const buttons = document.querySelector('.buttons')
const menuButtonStats = document.querySelector('.main-menu__button-stats')
const menuButtonSkins = document.querySelector('.main-menu__button-skins')
const menuWin = document.querySelector('.win-menu')


const menuSkinsMain = document.querySelector('.menu-skins__main')


const startScreen = document.querySelector('.start-screen')

const fullScreen = document.querySelector('.full-screen')

const leftButton = document.querySelector('.buttons__button-left')
const rightButton = document.querySelector('.buttons__button-right')

const playerPositionImage = Array.from(document.querySelectorAll('[class^="player-position_"]'));

const columns = Array.from(document.querySelectorAll('[class^="column_"]'));

const enemyPositionImage = Array.from(document.querySelectorAll('[class^="enemy-position_"]'));

const selectSkinDOM = Array.from(document.querySelectorAll('[class^="menu-skins__skin_"]'));

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

const menuStatsBetterRecord = document.querySelector('.menu-stats__better-record')

const menuSkinsButtonBack = document.querySelector('.menu-skins__button-back')
const menuStatsButtonBack = document.querySelector('.menu-stats__button-back')




let betterRecord = 1



const removeContent = (item, display)=> {
    item.classList.remove(display)
    item.classList.add('none')
}
const addContent = (item, display)=> {
    item.classList.remove('none')
    item.classList.add(display)
}
const addAnimation = (item)=>{
    item.classList.add('enemy-animation')
}
const removeAnimation = (item)=>{
    item.classList.remove('enemy-animation')
}

const addSelectClass = (item)=>{
    item.classList.add('select')
    item.classList.remove('release')
}
const removeSelectClass = (item)=>{
    item.classList.add('release')
    item.classList.remove('select')
}







if (localStorage.getItem('betterRecord')) {
	
	betterRecord = Number(localStorage.getItem('betterRecord'))
	menuStatsBetterRecord.innerText = `Рекорд: ${betterRecord}`
} else {
	
	localStorage.setItem('betterRecord', betterRecord)
	betterRecord = 1
	number.innerText = betterRecord
}




//skin

let selectedSkin = 'gulruh'

if (localStorage.getItem('selectedSkin')) {
	console.log('все оказалось созраненое')
	selectedSkin = localStorage.getItem('selectedSkin')


	//menuStatsBetterRecord.innerText = `Рекорд: ${betterRecord}`
} else {
	console.log('ниче не сохранилось')
	localStorage.setItem('selectedSkin', selectedSkin)
	selectedSkin = 'gulruh'
}

if (selectedSkin === 'gulruh') {
    addSelectClass(selectSkinDOM[0])
} else if (selectedSkin === 'jajon') {
    addSelectClass(selectSkinDOM[1])
} else if (selectedSkin === 'ami') {
    addSelectClass(selectSkinDOM[2])
} else if (selectedSkin === 'fara') {
    addSelectClass(selectSkinDOM[3])
} else if (selectedSkin === 'hadicha') {
    addSelectClass(selectSkinDOM[4])
}
// ахахаххаа лень думать как адекватно это сделать))




selectSkinDOM[0].addEventListener('click',()=>{
    selectedSkin = `gulruh`


    selectSkinDOM.forEach(element => {
        removeSelectClass(element)
    });
    
    addSelectClass(selectSkinDOM[0])


})
selectSkinDOM[1].addEventListener('click',()=>{
    selectedSkin = `jajon`

    selectSkinDOM.forEach(element => {
        removeSelectClass(element)
    });
    
    addSelectClass(selectSkinDOM[1])

    
})
selectSkinDOM[2].addEventListener('click',()=>{
    selectedSkin = `ami`

    selectSkinDOM.forEach(element => {
        removeSelectClass(element)
    });
    
    addSelectClass(selectSkinDOM[2])

    
})
selectSkinDOM[3].addEventListener('click',()=>{
    selectedSkin = `fara`

    selectSkinDOM.forEach(element => {
        removeSelectClass(element)
    });
    
    addSelectClass(selectSkinDOM[3])

    
})
selectSkinDOM[4].addEventListener('click',()=>{
    selectedSkin = `hadicha`

    selectSkinDOM.forEach(element => {
        removeSelectClass(element)
    });
    
    addSelectClass(selectSkinDOM[4])

    
})



menuSkinsMain.addEventListener('click',()=>{
    localStorage.setItem('selectedSkin', selectedSkin)
    

})




playerPositionImage[0].src='images/player/gulruh.webp'







let playerPosition = 2
let ThisIsPhone
let randomNumberRange4
let score = 0

startScreen.addEventListener('click', ()=>{
    if (window.innerWidth > 550) {
        removeContent(startScreen, 'flex')
        fullScreen.requestFullscreen()

        menuMusic.play()
    } else {
        startScreen.innerHTML = `Пожалуйста,<br> Переверните экран.`
    }
})



menuButtonStats.addEventListener('click', ()=>{
    addContent(menuStats, 'flex')
})
menuButtonSkins.addEventListener('click', ()=>{
    addContent(menuSkins, 'flex')
})


menuSkinsButtonBack.addEventListener('click', ()=>{
    
    location.reload()
})
menuStatsButtonBack.addEventListener('click', ()=>{
    
    location.reload()
})

h1.innerText = `Рекорд:${betterRecord}`

let asd = 'jajon'


playerPositionImage[2].src = `images/player/${asd}.webp`




let randomNumberRange1


menuButtonPlay.addEventListener('click', ()=>{

    menuMusic.pause()
    playMusic_0.play()
    

    removeContent(menuMain, 'flex')
    addContent(buttons, 'flex') 


    playerPositionImage.forEach(element => {
        element.src = `images/player/${selectedSkin}.webp`
    });


    


    let intervalID = setInterval(() => {
        randomNumberRange4 = Math.floor(Math.random()* 5)

        randomNumberForGulruh = Math.floor(Math.random()* 3)


        if (selectedSkin === 'gulruh') {

           
        

            if (randomNumberForGulruh === 0) {
                enemyPositionImage[randomNumberRange4].src = `images/enemy/gulruh_0.webp`

            } else if (randomNumberForGulruh === 1) {
                enemyPositionImage[randomNumberRange4].src = `images/enemy/gulruh_1.webp`

            } else if (randomNumberForGulruh === 2) {
                enemyPositionImage[randomNumberRange4].src = `images/enemy/gulruh_2.webp`

            } 
    
      
        }

        if (selectedSkin === 'jajon') {

           
            
            randomNumberForJajon = Math.floor(Math.random()* 2)

            if (randomNumberForJajon === 0) {
                enemyPositionImage[randomNumberRange4].src = `images/enemy/jajon_0.webp`

            } else if (randomNumberForJajon === 1) {
                enemyPositionImage[randomNumberRange4].src = `images/enemy/jajon_1.webp`

            } 
    
      
        }


        if (selectedSkin === 'ami') {

           
            
            randomNumberForAmi = Math.floor(Math.random()* 2)

            if (randomNumberForAmi === 0) {
                enemyPositionImage[randomNumberRange4].src = `images/enemy/ami_0.webp`

            } else if (randomNumberForAmi === 1) {
                enemyPositionImage[randomNumberRange4].src = `images/enemy/ami_1.webp`

            } 
    
      
        }


        if (selectedSkin === 'fara') {

            
            
            randomNumberForFara = Math.floor(Math.random()* 1)

            if (randomNumberForFara === 0) {
                enemyPositionImage[randomNumberRange4].src = `images/enemy/fara_0.webp`

            } 
    
        }


        if (selectedSkin === 'hadicha') {

            
            
            randomNumberForHadicha = Math.floor(Math.random()* 3)

            if (randomNumberForHadicha === 0) {
                enemyPositionImage[randomNumberRange4].src = `images/enemy/hadicha_0.webp`

            } else if (randomNumberForHadicha === 1) {
                enemyPositionImage[randomNumberRange4].src = `images/enemy/hadicha_1.webp`

            } else if (randomNumberForHadicha === 2) {
                enemyPositionImage[randomNumberRange4].src = `images/enemy/hadicha_2.webp`

            } 
    
      
        }







        console.log('spawn enemy')
        
        addContent(enemyPositionImage[randomNumberRange4], 'inline')
        addAnimation(enemyPositionImage[randomNumberRange4])
        setTimeout(()=>{

            removeAnimation(enemyPositionImage[randomNumberRange4])
    
            if (randomNumberRange4 === playerPosition) {
                console.log('+1')
                score += 1
                h1.innerText = `Счёт:${score}`
            } else {
                if (betterRecord < score) {
                    betterRecord = score
                    localStorage.setItem('betterRecord', betterRecord)
                }

                clearInterval(intervalID)
                
                addContent(menuWin, 'flex')

                menuWin.addEventListener('click',()=>{location.reload()})

                if (score <= 5) {
                    menuWinImage.src = `images/stats/nothing.webp`
                    menuWinText.innerText = `Ты шибяqqqов`
                } else if (score <= 10) {
                    menuWinImage.src = `images/stats/bronze.webp`
                    menuWinText.innerText = `Ты qora`
                } else if (score <= 20) {
                    menuWinImage.src = `images/stats/silver.webp`
                    menuWinText.innerText = `Ты Ташкентский парень`
                } else if (score >= 21) {
                    menuWinImage.src = `images/stats/gold.webp`
                    menuWinText.innerText = `Ты ай молодец`
                }

                
                
                

            }
            if (score >= 1) {
                h2.innerText = `Этап:1`
            }

            if (score >= 5) {
                leftButton.classList.add('buttonLevel_0')
                rightButton.classList.add('buttonLevel_0')
                h2.innerText = `Этап:2`

                
            } 
            if (score >= 10) {
                

                leftButton.classList.add('order_2')
                rightButton.classList.add('order_1')

                h2.innerText = `Этап:3`

                
            } 

            if (score >= 15) {
                leftButton.classList.remove('buttonLevel_0')
                rightButton.classList.remove('buttonLevel_0')

                leftButton.classList.add('buttonLevel_1')
                rightButton.classList.add('buttonLevel_1')

                playMusic_0.pause()
                
                playMusic_1.play()

                h2.innerText = `Этап:4`
                
            } 
            if (score >= 20) {
                leftButton.classList.add('opacity')
                rightButton.classList.add('opacity')

                h2.innerText = `Этап:5`

                
            }
            if (score >= 25) {
                leftButton.classList.remove('buttonLevel_1')
                rightButton.classList.remove('buttonLevel_1')

                leftButton.classList.add('buttonLevel_2')
                rightButton.classList.add('buttonLevel_2')

                h2.innerText = `Этап:6`



            }
            if (score >= 30) {
                leftButton.classList.remove('buttonLevel_2')
                rightButton.classList.remove('buttonLevel_2')

                leftButton.classList.add('buttonLevel_3')
                rightButton.classList.add('buttonLevel_3')

                h2.innerText = `Этап:777`



            }

            
        }, 1700)
        
        
    
    }, 1750)




    
})




leftButton.addEventListener('click', ()=>{
    
    removeContent(playerPositionImage[playerPosition], 'inline')
   
    if (playerPosition == 0) {
        
    } else {
        playerPosition += -1
        
    }
    
    addContent(playerPositionImage[playerPosition], 'inline')


    

})
rightButton.addEventListener('click', ()=>{



    
   
    removeContent(playerPositionImage[playerPosition], 'inline')

    if (playerPosition == 4) {
        
    } else {
        playerPosition += +1
        
    }

    addContent(playerPositionImage[playerPosition], 'inline')


    
})

if (betterRecord <= 5) {
    menuStatsImage.src = `images/stats/nothing.webp`
   
} else if (betterRecord <= 10) {
    menuStatsImage.src = `images/stats/bronze.webp`
   
} else if (betterRecord <= 20) {
    menuStatsImage.src = `images/stats/silver.webp`
  
} else if (betterRecord >= 21) {
    menuStatsImage.src = `images/stats/gold.webp`
    
}

