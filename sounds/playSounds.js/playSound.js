
function startSound() {

    let startSound = document.getElementById('start-game')
    startSound.play()
}
 function finishSound() {

    let finishSound = document.getElementById('finish-game')
    finishSound.play()
}
 function click100Sound() {

    let startSound = document.getElementById('click-100-game')
    startSound.play()
}
function bonunsSound() {

    let startSound = document.getElementById('bonus-game')
    startSound.play()
}
function clickSound() {
    let clickSound = document.createElement('audio')
    clickSound.setAttribute('src', 'sounds/mouse-click-290204.mp3')
    clickSound.setAttribute('type', 'audio/mp3')
    clickSound.play()
    let divAudio = document.getElementsByClassName("audio")[0]
    divAudio.appendChild(clickSound)

}
 function stopSound() {
    let clickSound = document.createElement('audio')
    clickSound.setAttribute('src', 'sounds/stop-13692.mp3')
    clickSound.setAttribute('type', 'audio/mp3')
    clickSound.play()
    let divAudio = document.getElementsByClassName("audio")[0]
    divAudio.appendChild(clickSound)

}
export{
    startSound,
    click100Sound,
    bonunsSound,
    finishSound,
    clickSound,
    stopSound
}