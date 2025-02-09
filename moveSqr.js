import { rows } from "./constants.js"

function moveSqr(index) {

    let tds = document.getElementsByTagName('td')
            
        let rnd = Math.ceil(Math.random() * 2)
        let indexTmp = index
        if (rnd == 1) {
            index = index + rows+1
        } else {
            index = index + rows-1
        }
        
        tds[index].style.backgroundColor = 'red'
        tds[indexTmp].style.backgroundColor='aqua'
        
    return index
} 

export{
    moveSqr
}
