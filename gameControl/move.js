import { arrOcupIndex, cols, gravity, rows } from "../constants.js"
import { stopSound } from "../sounds/playSounds.js/playSound.js"
/**
 * 
 * @param {*} i
 * i from wich pixel starts game  
 */
function move(i) {

    let emptySqr
    let interval = setInterval(() => {

        let tds = document.getElementsByTagName('td')
        // // arrIntervals.push(interval)

        let rnd = Math.ceil(Math.random() * 3)

        let indexTmp = i
        if (rnd == 1) {
            i = i + cols + 1
        }
        else if(rnd == 2) {
            i = i + cols - 1
        }
        else{
            i= i +cols
        }
        if (!arrOcupIndex.includes(indexTmp)) {
            emptySqr = indexTmp}
        if (i > rows * cols) {
            arrOcupIndex.push(emptySqr)
    
            tds[emptySqr].style.backgroundColor = 'red'
            arrOcupIndex.map((e) => {
                
                tds[e].style.backgroundColor = 'red'
            })
            clearInterval(interval)
            stopSound()
        }else{
            tds[i].style.backgroundColor = 'red'
            tds[indexTmp].style.backgroundColor = 'aqua'
        }
        

    }, gravity)
}
export {
    move
}