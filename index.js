


function Sphere(name, selector, icon) {
    this.name = name
    this.selector = document.querySelector(selector)
    this.icon = document.querySelector(selector).src = icon
}

function Spell(name, selector, icon) {
    this.name = name
    this.selector = document.querySelector(selector)
    this.icon = document.querySelector(selector).src = icon
}

function RandomSpell(name, selector, icon) {
    this.name = name
    this.selector = document.querySelector(selector)
    this.icon = document.querySelector(selector).src = icon
}

const quas = 'quas'
const wex = 'wex'
const exort = 'exort'
const quasIcon = 'img/Quas_icon.webp'
const wexIcon = 'img/Wex_icon.webp'
const exortIcon = 'img/Exort_icon.webp'


counterInText = document.querySelector('.random-spell__counter')


let spells = {
    name: ['Cold Snap', 'Ghost Walk', 'Ice Wall', 'E.M.P.', 'Tornado', 'Alacrity', 'Sunstrike', 'Forge Spirit', 'Meteor', 'Deafening Blast'],
    icon: ['img/Cold_Snap_icon.webp', 'img/Ghost_Walk_icon.webp', 'img/Ice_Wall_icon.webp', 'img/E.M.P._icon.webp', 'img/Tornado_icon.webp', 'img/Alacrity_icon.webp', 'img/Sun_Strike_icon.webp', 'img/Forge_Spirit_icon.webp', 'img/Chaos_Meteor_icon.webp', 'img/Deafening_Blast_icon.webp']
}

let first = new Sphere('nothing', '.first-sphere', 'img/Unknown_icon.webp')
let second = new Sphere('nothing', '.second-sphere', 'img/Unknown_icon.webp')
let third = new Sphere('nothing', '.third-sphere', 'img/Unknown_icon.webp')

let firstCreatedSpell = new Spell('nothing', '.first-created-spell', 'img/Unknown_icon.webp')
let secondCreatedSpell = new Spell('nothing', '.second-created-spell', 'img/Unknown_icon.webp')

let randomCreatedSpell = new RandomSpell('nothing', '.random-spell__icon', 'img/Unknown_icon.webp')

const buttonGame = document.querySelector('.menu-background__button_start')
const menuBackground = document.querySelector('.menu-background')

let counterCorrectsAsks = 0

let randomNumberInRange10 = Math.floor(Math.random() * 10)
randomCreatedSpell.name = spells.name[randomNumberInRange10]
randomCreatedSpell.icon = randomCreatedSpell.selector.src = spells.icon[randomNumberInRange10] 
let thisDoTrue = false

const startGame = ()=>{
    menuBackground.classList.add('none')
    setTimeout(()=>{location.reload()},1000000)
    
    
}
buttonGame.addEventListener('click', startGame)

window.addEventListener('keydown', () => {
   
    if (event.code === 'Enter') {
        if (thisDoTrue == false) {
            thisDoTrue = true
            startGame()
        }
        
    }

    if (event.code === 'KeyQ') {
        first.name = second.name
        second.name = third.name
        third.name = quas
        
        first.icon = first.selector.src = second.icon
        second.icon = second.selector.src = third.icon
        third.icon = third.selector.src = quasIcon
    }

    if (event.code === 'KeyW') {
        first.name = second.name
        second.name = third.name
        third.name = wex

        first.icon = first.selector.src = second.icon
        second.icon = second.selector.src = third.icon
        third.icon = third.selector.src = wexIcon
    }

    if (event.code === 'KeyE') {
        first.name = second.name
        second.name = third.name
        third.name = exort

        first.icon = first.selector.src = second.icon
        second.icon = second.selector.src = third.icon
        third.icon = third.selector.src = exortIcon
    }

    if (event.code === 'KeyR') {

        
        if (first.name === quas & second.name === quas & third.name === quas) {

            

            if (secondCreatedSpell.name === spells.name[0]) {

            } else {
                firstCreatedSpell.icon = firstCreatedSpell.selector.src = secondCreatedSpell.icon
                secondCreatedSpell.icon = secondCreatedSpell.selector.src = spells.icon[0]
                firstCreatedSpell.name = secondCreatedSpell.name
                secondCreatedSpell.name = spells.name[0]
            }

            

        } else if (first.name === quas & second.name === quas & third.name === wex || first.name === quas & second.name === wex & third.name === quas || first.name === wex & second.name === quas & third.name === quas) {

            if (secondCreatedSpell.name === spells.name[1]) {

            } else {
                firstCreatedSpell.name = secondCreatedSpell.name
                secondCreatedSpell.name = spells.name[1]
                firstCreatedSpell.icon = firstCreatedSpell.selector.src = secondCreatedSpell.icon
                secondCreatedSpell.icon = secondCreatedSpell.selector.src = spells.icon[1]
            }
            

        } else if (first.name === quas & second.name === quas & third.name === exort || first.name === quas & second.name === exort & third.name === quas || first.name === exort & second.name === quas & third.name === quas) {

            if(secondCreatedSpell.name === spells.name[2]){

            } else {
                firstCreatedSpell.name = secondCreatedSpell.name
                secondCreatedSpell.name = spells.name[2]
                firstCreatedSpell.icon = firstCreatedSpell.selector.src = secondCreatedSpell.icon
                secondCreatedSpell.icon = secondCreatedSpell.selector.src = spells.icon[2]
            }


            


        } else if (first.name === wex & second.name === wex & third.name === wex) {

            if(secondCreatedSpell.name === spells.name[3]){

            } else {
                firstCreatedSpell.name = secondCreatedSpell.name
                secondCreatedSpell.name = spells.name[3]
                firstCreatedSpell.icon = firstCreatedSpell.selector.src = secondCreatedSpell.icon
                secondCreatedSpell.icon = secondCreatedSpell.selector.src = spells.icon[3]    
            }
            

        } else if (first.name === wex & second.name === wex & third.name === quas || first.name === wex & second.name === quas & third.name === wex || first.name === quas & second.name === wex & third.name === wex) {

            if(secondCreatedSpell.name === spells.name[4]){

            } else {
                firstCreatedSpell.name = secondCreatedSpell.name
                secondCreatedSpell.name = spells.name[4]
                firstCreatedSpell.icon = firstCreatedSpell.selector.src = secondCreatedSpell.icon
                secondCreatedSpell.icon = secondCreatedSpell.selector.src = spells.icon[4]   
            }
            

        } else if (first.name === wex & second.name === wex & third.name === exort || first.name === wex & second.name === exort & third.name === wex || first.name === exort & second.name === wex & third.name === wex) {

            if(secondCreatedSpell.name === spells.name[5]){

            } else {
                firstCreatedSpell.name = secondCreatedSpell.name
                secondCreatedSpell.name = spells.name[5]
                firstCreatedSpell.icon = firstCreatedSpell.selector.src = secondCreatedSpell.icon
                secondCreatedSpell.icon = secondCreatedSpell.selector.src = spells.icon[5]   
            }
            


        } else if (first.name === exort & second.name === exort & third.name === exort) {

            if(secondCreatedSpell.name === spells.name[6]){

            } else {
                firstCreatedSpell.name = secondCreatedSpell.name
                secondCreatedSpell.name = spells.name[6]
                firstCreatedSpell.icon = firstCreatedSpell.selector.src = secondCreatedSpell.icon
                secondCreatedSpell.icon = secondCreatedSpell.selector.src = spells.icon[6]  
            }
            

        } else if (first.name === exort & second.name === exort & third.name === quas || first.name === exort & second.name === quas & third.name === exort || first.name === quas & second.name === exort & third.name === exort) {

            if(secondCreatedSpell.name === spells.name[7]){

            } else {
                firstCreatedSpell.name = secondCreatedSpell.name
                secondCreatedSpell.name = spells.name[7]
                firstCreatedSpell.icon = firstCreatedSpell.selector.src = secondCreatedSpell.icon
                secondCreatedSpell.icon = secondCreatedSpell.selector.src = spells.icon[7] 
            }
            

        } else if (first.name === exort & second.name === exort & third.name === wex || first.name === exort & second.name === wex & third.name === exort || first.name === wex & second.name === exort & third.name === exort) {

            if(secondCreatedSpell.name === spells.name[8]){

            } else {
                firstCreatedSpell.name = secondCreatedSpell.name
               secondCreatedSpell.name = spells.name[8]
                firstCreatedSpell.icon = firstCreatedSpell.selector.src = secondCreatedSpell.icon
                secondCreatedSpell.icon = secondCreatedSpell.selector.src = spells.icon[8] 
            }
           


        } else if (first.name === quas & second.name === wex & third.name === exort || first.name === wex & second.name === exort & third.name === quas || first.name === exort & second.name === quas & third.name === wex || first.name === quas & second.name === exort & third.name === wex || first.name === wex & second.name === quas & third.name === exort || first.name === exort & second.name === wex & third.name === quas) {
            
        
            if(secondCreatedSpell.name === spells.name[9]){

            } else {
                firstCreatedSpell.name = secondCreatedSpell.name
                secondCreatedSpell.name = spells.name[9]
                firstCreatedSpell.icon = firstCreatedSpell.selector.src = secondCreatedSpell.icon
                secondCreatedSpell.icon = secondCreatedSpell.selector.src = spells.icon[9]    
            }
            


        }



    }

    if (event.code === 'KeyF') {
        if (firstCreatedSpell.name === randomCreatedSpell.name) {
          
            counterCorrectsAsks++
            let randomNumberInRange10 = Math.floor(Math.random() * 10)
            randomCreatedSpell.name = spells.name[randomNumberInRange10]
            randomCreatedSpell.icon = randomCreatedSpell.selector.src = spells.icon[randomNumberInRange10] 
            if (randomCreatedSpell.name === secondCreatedSpell.name || randomCreatedSpell.name === firstCreatedSpell.name) {
                let randomNumberInRange10 = Math.floor(Math.random() * 10)

                randomCreatedSpell.name = spells.name[randomNumberInRange10]
                randomCreatedSpell.icon = randomCreatedSpell.selector.src = spells.icon[randomNumberInRange10] 
            }
        } 
    }

    if (event.code === 'KeyD') {
        if (secondCreatedSpell.name === randomCreatedSpell.name) {
          
            counterCorrectsAsks++
            let randomNumberInRange10 = Math.floor(Math.random() * 10)

            randomCreatedSpell.name = spells.name[randomNumberInRange10]
            randomCreatedSpell.icon = randomCreatedSpell.selector.src = spells.icon[randomNumberInRange10] 
            
            if (randomCreatedSpell.name === secondCreatedSpell.name || randomCreatedSpell.name === firstCreatedSpell.name) {
                let randomNumberInRange10 = Math.floor(Math.random() * 10)

                randomCreatedSpell.name = spells.name[randomNumberInRange10]
                randomCreatedSpell.icon = randomCreatedSpell.selector.src = spells.icon[randomNumberInRange10] 
            }
        } 
    } 

    first.selector.innerText = first.name
    second.selector.innerText = second.name
    third.selector.innerText = third.name

    firstCreatedSpell.selector.innerText = firstCreatedSpell.name
    secondCreatedSpell.selector.innerText = secondCreatedSpell.name

    counterInText.innerText = counterCorrectsAsks

})

