
const box = document.querySelector('.example')
const span = document.querySelector('span')
const html = document.querySelector('html')

box.addEventListener('copy', (e) => {
    span.style.display = 'block'
})

html.addEventListener('click', () => {
    span.style.display = 'none'
})
