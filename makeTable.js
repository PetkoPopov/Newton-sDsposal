import {  cols, rows } from "./constants.js"

let table = document.getElementById('table')
for (let row = 0; row < rows; row++) {
    let tr = document.createElement('tr')
    for (let col = 0; col < cols; col++) {
        let td = document.createElement('td')
        td.textContent =row*cols+col
    tr.appendChild(td)
    }
    table.appendChild(tr)
}
export {
    table
}