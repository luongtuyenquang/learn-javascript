
function sum(x, y) {
    if(x === 0) {
        throw 'Có số 0 !!'
    }
    else {
        return x + y
    }
}
try {
    sum(0, 2)
}
catch (err) {
    console.log(err);
}