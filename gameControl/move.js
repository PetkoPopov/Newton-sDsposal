import { arrOcupIndex, cols, gravity, rows } from "../constants.js"
import { stopSound } from "../sounds/playSounds.js/playSound.js"
import { ocupVer } from "./ocupVer.js"
/**
 * 
 * @param {*} i
 * i from wich pixel starts game  
 */
function move(i) {
    let ocupArr = []
    let emptySqr
    let interval = setInterval(() => {

        let tds = document.getElementsByTagName('td')
        // // arrIntervals.push(interval)


        let rnd = Math.ceil(Math.random() * 2)

        let indexTmp = i
        if (rnd == 1 && tds[i + cols + 1] && (i + 1) % cols != 0) {
            i = i + cols + 1
        } else if (rnd == 1 && tds[i + cols - 1] && (i + 1) % cols == 0) {
            i = i + cols - 1
        }
        else if (rnd == 2 && tds[i + cols - 1] && i % cols != 0) {
            i = i + cols - 1
        } else if (rnd == 2 && tds[i + cols + 1] && i % cols == 0) {
            i = i + cols + 1
        }else{i+=cols}

        if (!arrOcupIndex.includes(indexTmp)) {
            emptySqr = indexTmp
        }
        // console.log(i)
        if (i >= rows * cols || ocupArr.includes(i)|| indexTmp == i) {
            console.log(ocupArr, "ocupeArr index", i)
            arrOcupIndex.push(emptySqr)
            tds[emptySqr].style.backgroundColor = 'red'
            tds[emptySqr].style.value = true

            arrOcupIndex.map((e) => {
                tds[e].style.backgroundColor = 'red'
            })
            ocupArr = ocupVer()
            clearInterval(interval)
            stopSound()
        } else {
            tds[i].style.backgroundColor = 'red'
            tds[indexTmp].style.backgroundColor = 'aqua'
        }


    }, gravity)
}


export {
    move
}