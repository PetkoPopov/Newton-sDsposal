import {  cols, rows } from "./constants.js"

let table = document.getElementById('table')
for (let col = 0; col < cols; col++) {
    let tr = document.createElement('tr')
    for (let row = 0; row < rows; row++) {
        let td = document.createElement('td')
        td.textContent ='_'
    tr.appendChild(td)
    }
    table.appendChild(tr)
}
export {
    table
}