import { arrOcupIndex, cols, index, rows } from "../constants.js"
import { move } from "../gameControl/move.js"

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
    move(i)
})

div.appendChild(buttonStart)
export {
    buttonStart
}