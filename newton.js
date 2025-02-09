import { index } from "./constants.js"
import { moveSqr } from "./moveSqr.js"

let i = index
let interval =setInterval(()=>{
    i = moveSqr(i)
},200)
export{
    interval
}