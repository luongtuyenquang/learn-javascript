
const input = document.querySelector('input[type=text]')

input.addEventListener('keydown', () => {
    console.log('Sự kiện xảy ra khi người dùng bắt đầu nhấn phím');
})

input.addEventListener('keyup', () => {
    console.log('Sự kiện xảy ra khi người dùng thả phím ra');
})

input.addEventListener('keypress', () => {
    console.log('Sự kiện xảy ra khi người dùng bấm phím');
})
