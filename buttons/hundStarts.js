import { amountHund, arrOcupIndex, cols, gravity, index, rows } from "../constants.js"
import { move } from "../gameControl/move.js"
import { bonunsSound } from "../sounds/playSounds.js/playSound.js"

let buttonHund = document.getElementById('hundStarts')
buttonHund.style.top = "150px"
buttonHund.textContent = '100 Hund Starts'
buttonHund.style.left= String(cols*35)+"px"
buttonHund.addEventListener('click', () => {
    buttonHund.style.top = "160px"
    buttonHund.style.left = String(cols * 37) + "px"
    let count = 0
   let i = index+Math.floor(Math.random()*2)

    let int_ = setInterval(()=>{
        count++
        if(Math.floor(Math.random()*2)==0 ){
            i = index
        }else{
            i = index-1
        }            
            move(i)
        if(count == amountHund){
            
            console.log('finished 100 times--->');clearInterval(int_)}   
    },1000)
    

setTimeout(()=>{
    buttonHund.style.top = "150px"
    buttonHund.style.left = String(cols * 35) + "px"
},500)
   
})

export {
    buttonHund
}
