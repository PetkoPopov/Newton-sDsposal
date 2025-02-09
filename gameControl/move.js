import { arrOcupIndex, cols, rows } from "../constants.js"

function move(i) {

    let interval = setInterval(() => {

        let tds = document.getElementsByTagName('td')
        // // arrIntervals.push(interval)

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
}
export{
    move
}