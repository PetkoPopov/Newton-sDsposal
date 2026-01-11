import { arrOcupIndex, cols, index, rows } from "../constants.js"
import { move } from "../gameControl/move.js"
import { bonunsSound, clickSound, finishSound, startSound } from "../sounds/playSounds.js/playSound.js"

let buttonStart = document.getElementById('button-start')
buttonStart.textContent = 'startGame'
buttonStart.style.left = String(cols * 35) + "px"

////////////////////////////////////////////////////////////
////                                                    ///
//////////////////////////////////////////////////////////

buttonStart.addEventListener('click', () => {
    startSound();
    let i = index+Math.floor(Math.random()*2)
    buttonStart.style.left = String(cols * 37) + "px"
    buttonStart.style.top =  "22px"
    clickSound()
    move(i)
    setTimeout(()=>{
        buttonStart.style.left = String(cols * 35) + "px"
        buttonStart.style.top = "20px"
    },500)
})

export {
    buttonStart
}