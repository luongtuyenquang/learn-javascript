
// Không có Async
// const promise = new Promise(resolve => {
//     resolve(['a', 'b', 'c'])
// })

// Chỉ có Async
const promise = async () => {
    return ['a', 'b', 'c']
}

// promise().then(arr => {
//     console.log(arr);
// })

// Có Async/Await
const run = async () => {
    const result = await promise()
    console.log(result);
}

run()