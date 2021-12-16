
const box = document.querySelector('.example')
const span = document.querySelector('span')

box.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    span.style.display = 'block'
})

span.addEventListener('click', () => {
    span.style.display = 'none'
    console.log('Deleted Successfully');
})
