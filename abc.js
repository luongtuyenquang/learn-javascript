
const input = document.querySelector('input')
const span = document.querySelector('span')

input.addEventListener('keyup', (e) => {
    if(e.which === 13){
        span.style.display = 'block'
        e.target.value = ''
    }
})
