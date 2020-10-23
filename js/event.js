//event.js ok

//div new
let buttons = document.querySelectorAll('#new>button'); //#new하위의 button을 가져와라

for (let i = 0; i < buttons.length; i++) {
    // buttons[i].onclick = function () {
    // alert(buttons[i].innerHTML);  //innerHTML속성을 뿌려달라
    // alert(this.innerHTML);  //this로 이렇게 써도됨 this:오브젝트 자신

    buttons[i].onclick = clickFunc;
    buttons[i].onmouseover = function(){
        this.style.background = 'pink';
    }
}

function clickFunc() {
    alert(this.innerHTML);
}

console.log(buttons)

//div show
let onBtn = document.getElementById('turnOn');

onBtn.onclick = function () {
    let img = document.querySelector('#show>img'); //querySelector: 배열처럼 들어온다. id값 show밑에있는 img
    img.setAttribute('src', 'images/on.gif');
}
onBtn.onmouseover = function () {
    onBtn.style.background = 'orange';
    onBtn.style.color = 'white';
}

let offBtn = document.getElementById('turnOff');

offBtn.onclick = function () {
    let img = document.querySelector('#show>img');
    img.setAttribute('src', 'images/off.gif');
}
offBtn.onmouseover = function () {
    offBtn.style.background = 'green';
    offBtn.style.color = 'white';
}
