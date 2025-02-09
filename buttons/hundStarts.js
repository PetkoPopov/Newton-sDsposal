import { arrOcupIndex, cols, index, rows } from "../constants.js"
import { move } from "../gameControl/move.js"

let buttonHund = document.createElement('div')
buttonHund.setAttribute('class', 'button')
let div = document.getElementById('button-start')
buttonHund.textContent = '100 Start'
buttonHund.style.top = "150px"
buttonHund.addEventListener('click', () => {
    
    let count = 0
    let i =index
    let int_ = setInterval((count)=>{
        count++
        move(i)
        if(count == 150){clearInterval(int_)}   
    },50)
    

   
})

div.appendChild(buttonHund)
export {
    buttonHund
}
