document.querySelector('button').addEventListener('click', function (event) {
    console.log(event)
})

const input = document.querySelector('input');
input.addEventListener('keydown', function (evt) {
    console.log(evt);
})

input.addEventListener('keyup', function () {
    console.log("KEYUP");
})

window.addEventListener('keydown', function (e) {
    console.log(e.code);
    console.log(e.key);
})