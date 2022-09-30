//typewriter effect
//credit https://www.youtube.com/watch?v=mULM6KcF_mo
const typeWriter = document.getElementById('typed-text')
const phrases = ['"The Medium is the Massage"', 'The Medium is the Massage?', '"The Medium is the Massage"', 'Message?', '"Massage."', 'Are you sure?', '"The. Medium. is. the. Massage."', '...', '"..."', 'But-', '"M A S S A G E"', '     ']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function typeLoop() {
    isEnd = false
    typeWriter.innerHTML = currentPhrase.join('')
    if(i < phrases.length) {

        if(!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            typeWriter.innerHTML = currentPhrase.join('')
        }

        if(isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            typeWriter.innerHTML = currentPhrase.join('')
        }

        if(j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }
    
        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i == phrases.length) {
                i = 0                
            }
        }
    }
    const spedUp = Math.random() * (50 - 25) + 25
    const normalSpeed = Math.random() * (200 - 100) + 100
    const time = isEnd ? 2500 : isDeleting ? spedUp : normalSpeed
    setTimeout(typeLoop, time)
}

const scrollBtn = document.querySelector(".scroll-btn")
scrollBtn.addEventListener("click", typeLoop)