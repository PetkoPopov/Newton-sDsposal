import { cols, rows } from "../constants.js"

/**
 * показва кои колони со заети до първата свободна дупка
 * чете отдолу нагоре 
 */
function ocupVer(){
    console.log('invoke ocupe ver')
    let tds = document.getElementsByTagName('td')
    let arrVer =[]
    for(let vertical = 0 ; vertical < cols ; vertical++  ){
          let index = cols*(rows-1)+vertical
        //  console.log('new col')
          for(let row = 0 ; row < rows-1 ;row++){
            //   console.log(index,'<--índex')
                 if(tds[index].style.value ==true && !arrVer.includes(index)){
                    arrVer.push(index)
                    
                 }else{
                    // console.log('break')
                    break
                 }
                  index = index-cols                   

                }

            }
// console.log(arrVer)
            return arrVer
}
export {
    ocupVer
}