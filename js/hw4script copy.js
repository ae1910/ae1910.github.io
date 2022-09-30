const typeWriter = document.getElementsByClassName('typed-text')
const sentences = ['"The Medium is the Massage"', 'The Medium is the Massage?', '"The Medium is the Massage"', 'Message?', '"Massage."', '...', '"..."', 'Are you sure?', '"The. Medium. is. the. Massage."', 'But-', '"M A S S A G E"']
let i = 0
let j = 0
let currentSentence = []
let isDeleting = false

function typeLoop() {
    typeWriter.innerHTML = currentSentence.join('')
    
    if(i < sentences.length) {
        if(!isDeleting && j <= sentences[i].length) {
            currentSentence.push(sentences[i][j])
            j++
            console.log('add', j)
        }
        if(isDeleting && j <= sentences[i].length) {
            currentSentence.pop(sentences[i][j])
            j--
            console.log('remove', j)
        }
        if (j == sentences[i].length) {
            i++
            isDeleting = true
        }
        if (isDeleting && j === 0) {
            currentSentence = []
            isDeleting = false
            i++
            if (i == sentences.length) {
                i = 0                
            }
        }
        
    }
    setTimeout(typeLoop, 500)
}

typeLoop()