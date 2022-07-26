const btn = document.querySelector('#v2');

btn.onclick = function () {
    alert("DINGDINGDING!! WHO'S THERE?!");
}

function scream() {
    console.log("YAMETEEEE!!!")
}

btn.onmouseenter = scream;

const butt = document.querySelector('#v3');
butt.addEventListener('vclick', () => {
    alert("DEEZ NUTS! YOU WIN!!")
})