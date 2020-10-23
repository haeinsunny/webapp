//object_ary.js ok

//배열메소드
let apples = ['apple'];

apples[apples.length] = 'banana'; //length위치에 추가
apples[apples.length] = 'mango';

apples.push('melon'); //push: 배열의 맨 뒤에 즉, length위치에 추가한다
apples.push('strawberry');

apples.unshift('grape'); //unshift: 배열의 맨 앞에 추가시킨다. 이런방법으로 추가하면 배열의 빈공간이 없다

console.log(apples);

//맨뒤에 제거
apples.pop();
apples.pop();
//맨 앞에 제거
apples.shift();

// delete apples[1];
apples.splice(1, 1, 'new apple', 'new mango'); //splice: 원본에서 배열을 아예 삭제 (index 1에서 하나 삭제)

for (let fruit of apples) {
    console.log(fruit);
}

let fruits = ['apple', 'banana', 'mango', 'melon', 'grape'];
let newFr = fruits.slice(0, 3); //slice: 잘라온 값을 가지고 새로운 배열을 만듬
console.log(fruits);
console.log(newFr);


//배열일 경우에만 쓸수있는 메소드
for (let i = 0; i < fruits.length; i++) {

}
for (let fruit of fruits) {

}

fruits.forEach(function (a, b, c) { //forEach: fruits에 들어있는 배열을 하나씩 가져와서 function기능정의대로 반복해라. 
    // function(a, b, c): 익명의 함수를 호출, 실행하세요
    // console.log(a, b, c); //a:배열이름 b:index값 c:배열자체 이 뜨는걸 볼수있음
    if (b % 2 == 0) { //index요소가 짝수인 경우만 가져오기
        console.log(a, b)
    }
});

let tags = '<ul>';
fruits.forEach(function (a, b, c) {
    tags += '<li>' + a + '</li>';
});
tags += '</ul>';
console.log(tags);

let newBtn = document.getElementById('new');
newBtn.innerHTML += tags; //+=: 기존에 있던 내용뒤에 추가

let intAry = [3, 5, 2, 6, 4, 8, 6];
let sum = 0;
// for(i of intAry){    //forEach로 만들기
//     sum+= i;
// }
intAry.forEach(function (a, b, c) {
    sum += a;
});
console.log(sum);

//배열 오브젝트 생성
let per1 = { //per1라는 오브젝트
    name: 'Hong',
    age: 20,
    hobby: 'reading',
    grade: 'A'

}
let per2 = { //per2:오브젝트
    name: 'Hwang',
    age: 22,
    hobby: 'sleeping',
    grade: 'B'

}
let per3 = { //per3:오브젝트
    name: 'Park',
    age: 25,
    hobby: 'cycling',
    grade: 'C'

}

let name = per1.name;
// per1.name;
// per1['name'];  //위와 또다른 방식. 배열기호로 읽어오는 방법: 오브젝트의 name필드를 읽어와라
name = per1['name'];
let age = per1['age'];

//field를 선언해서 그떄그때 동적으로 배열안에 필드값을 넣겠다
function getField(obj, field) { //오브젝트의 해당 필드값들을 보고자할때
    return obj[field];
    // return obj.filed;  //이런방식으로 출력하면 obj 즉, per1에서 이름이 'filed'인 것을 찾겠다는 뜻이다. 
    // (per1에서 name, age 찾는것과 같은 개념)
}
name = getField(per1, 'name');
age = getField(per1, 'age');

for (field in per1) {
    console.log(field); //field가 선언되어지는 개수만큼 가져옴
}

console.log(age);

//오브젝트를 배열에 담기
let persons = [per1, per2, per3];

for (person of persons) { //looping하면서 배열 per1,2,3을 담겠다.
    for (field in person) {
        console.log(person[field]);
    }
    // console.log(person)
}

// let newTag = '<table border=1>';
// for(person of persons){  //of:배열의 개수만큼
//     newTag += '<tr>';
//     for(field in person){   //in:필드의 개수만큼
//         console.log(person[field]);
//         newTag += '<td>' +person[field] + '</td>';
//     }
//     newTag +='</tr>';
// }
// newTag +='</table>';
// newBtn.innerHTML = newTag;

let newTag = '<table border=2>';
for (person of persons) { //of:배열의 개수만큼
    newTag += '<tr>';
    for (field in person) { //in:필드의 개수만큼
        if (field == 'name') {
            newTag += '<td style="color:darkgreen;">' + person[field] + '</td>';
        } else if (field == 'age') {
            newTag += '<td style="font-weight: bold;">' + person[field] + '</td>';
        } else {
            newTag += '<td>' + person[field] + '</td>';
        }
    }
    newTag += '<td align="center" style="font-size:11px;"><button class = "btn">OK</button></td></tr>';
}
newTag += '</table>';
newBtn.innerHTML = newTag;

//css의 선택자 방식으로 클래스명이 btn의 요소를 가지고 옴
let btns = document.querySelectorAll(".btn"); // querySelectorAll: class가 btn인것을 모두 가져와라
console.log(btns);

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
    let trTag = this.parentNode.parentNode; //button의 상위 = td를 가리킴, 의 상위는 tr을 가리킴
        if(trTag.style.background == 'violet'){
            trTag.style.background = ' ';
        }else{
            trTag.style.background = 'violet';
        }
    }
}

//클릭하면 해당 요소들을 삭제
// for (let i = 0; i < btns.length; i++) {
//     btns[i].onclick = function () {
//         console.log(this.parentNode.parentNode.remove);
//     }
// }

// //클릭하면 해당 요소들에 스타일을 줌 
// for (let i = 0; i < btns.length; i++) {
//     btns[i].onclick = function () {
//         let trTag = this.parentNode.parentNode;
//         trTag.style.background = 'orange';
//         console.log;
//     }
// }

//css선택자를 tr로 찾아온다. (tr태그들을 가져오겠다)
let trs = document.getElementsByTagName('tr'); //getElementsByTagName: tagname으로 방식을 찾아오겠다. tagname만 적으면 됨

for (let i = 0; i < trs.length; i++) {
    trs[i].onmouseover = function () {
        this.style.background = 'pink'; //this: 이벤트가 발생하는 대상
    }
    trs[i].onmouseout = function () {
        this.style.background = '';
    }
}