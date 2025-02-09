import { arrOcupIndex, cols, index, rows } from "../constants.js"
// import { moveSqr } from "../moveSqr.js"

console.log(rows)
let buttonStart = document.createElement('div')
buttonStart.setAttribute('class', 'button')
let div = document.getElementById('button-start')
buttonStart.textContent = 'startGame'
let arrIntervals = []
////////////////////////////////////////////////////////////
////                                                    ///
buttonStart.addEventListener('click', () => {
    //////////////////////////////////////////////////////////
    let i = index

    let tds = document.getElementsByTagName('td')
    // console.log(index)

    let interval = setInterval(() => {

        // arrIntervals.push(interval)

        let rnd = Math.ceil(Math.random() * 2)

        let indexTmp = i

        if (rnd == 1) {
            i = i + rows + 1
        }
        else {
            i = i + rows - 1
        }


        if (arrOcupIndex.includes(i) || indexTmp > rows * cols) {
            i = indexTmp
            clearInterval(interval)
            arrOcupIndex.push(i)
        }

        tds[i].style.backgroundColor = 'red'
        if (!arrOcupIndex.includes(indexTmp)) {
            tds[indexTmp].style.backgroundColor = 'aqua'
        }


    }, 200)

})

div.appendChild(buttonStart)
export {
    buttonStart
}