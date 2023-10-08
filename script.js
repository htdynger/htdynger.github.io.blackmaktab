const menuButtonPlay = document.querySelector('.main-menu__button')
const menuMain = document.querySelector('.main-menu')
const predict = document.querySelector('.predict')
const buttons = document.querySelector('.buttons')

const fullScreen = document.querySelector('.full-screen')

const leftButton = document.querySelector('.buttons__button-left')
const rightButton = document.querySelector('.buttons__button-right')

const playerPositionImage = Array.from(document.querySelectorAll('[class^="player-position_"]'));

const columns = Array.from(document.querySelectorAll('[class^="column_"]'));

const enemyPositionImage = Array.from(document.querySelectorAll('[class^="enemy-position_"]'));

const h1 = document.querySelector('h1')


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




let playerPosition = 2
let ThisIsPhone
let randomNumberRange4
let score = 0













if (window.innerWidth > 550) {
    ThisIsPhone = false
    removeContent(predict, 'flex')
} else {
    ThisIsPhone = true
    
}

if (ThisIsPhone === true) {
    removeContent(menuMain, 'flex')

    setTimeout(()=> {
        location.reload()
        
    }, 3000)
}

menuButtonPlay.addEventListener('click', ()=>{
    fullScreen.requestFullscreen()
    removeContent(menuMain, 'flex')
    addContent(buttons, 'flex') 


    setInterval(() => {
        console.log('spawn enemy')
        randomNumberRange4 = Math.floor(Math.random()* 5)
        addContent(enemyPositionImage[randomNumberRange4], 'inline')
        addAnimation(enemyPositionImage[randomNumberRange4])
        setTimeout(()=>{
            removeAnimation(enemyPositionImage[randomNumberRange4])
    
            if (randomNumberRange4 === playerPosition) {
                console.log('+1')
                score += 1
                h1.innerText = `Score:${score}`
            } else {
               
                location.reload()
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



