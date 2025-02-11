import { arrOcupIndex, cols, index, rows } from "../constants.js"
import { move } from "../gameControl/move.js"
import { bonunsSound, clickSound, finishSound, startSound } from "../sounds/playSounds.js/playSound.js"

let buttonStart = document.createElement('div')
buttonStart.setAttribute('class', 'button')
let div = document.getElementById('button-start')
buttonStart.textContent = 'startGame'
buttonStart.style.left = String(cols * 25) + "px"

////////////////////////////////////////////////////////////
////                                                    ///
//////////////////////////////////////////////////////////

buttonStart.addEventListener('click', () => {
    let i = index
    buttonStart.style.left = String(cols * 26) + "px"
    buttonStart.style.top =  "22px"
    clickSound()
    move(i)
    setTimeout(()=>{
        buttonStart.style.left = String(cols * 25) + "px"
        buttonStart.style.top = "20px"
    },500)
})

div.appendChild(buttonStart)
export {
    buttonStart
}