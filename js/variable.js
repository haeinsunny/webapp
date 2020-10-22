// variable.js
let var1 = 10;
var1 = 'hello';
// let var1 = 20;
// console.log(typeof var1);

const var2 = '20'; //cont:상수값(한번 값이 지정되면 다른값으로 못바꿈), let:변수값 계속 지정 가능
// var2 = 20;  //같은 20이라도 처음 설정한 20 이외에 다른 값 지정 안됨

let num1 = 10;
let num2 = '10';


if (num1 == num2) { //==:타입은 모르겟고 담고있는 값만 체크하겠다.
    console.log('same');
} else {
    console.log('dif');
}

num2 = 10;
if (num1 === num2) { //===: 값과 타입 모두를 체크하겠다
    console.log('same');
} else {
    console.log('dif');
}

num2++;

let trueOrFalse = true; //boolean타입
if (trueOrFalse) {
    console.log(true);
}

num2 = 0; //변수선언. 또는 num2 = null; 로 쓸수있다. 0이나 null은 false이다.
if (num2) {
    console.log(true);
} else {
    console.log(false);
}

let num3; //변수 선언을 하지않은 상태에서는 타입이 지정되지 않는다
if (num3) {
    console.log(true);
} else {
    console.log(false);
}
console.log(typeof num3);

let person = {
    name: 'Hong',
    age: 20,
    score: 80
}

person.hobby = 'reading'; //person이라는 변수에 hobby라는 변수를 추가하고 싶을때

console.log(person.name);
console.log(person.age);
console.log(person);

let persons = [person, {
    name: 'Hwang',
    age: 25,
    score: 90
}]; //persons에 person을 담고 새로운 hwang담는다

console.log(persons); //(2): persons 배열안에 오브젝트가 2개 들어있다.

console.log(persons[1].name + ', ' + persons[0].age); //[0]은 hong [1]은 hwang

persons.push({
    name: 'Choi',
    age: 27,
    score: 100
}); //배열에 오브젝트를 넣는방법1 push사용이 최적화

console.log('persons length: ' + persons.length);

persons[3] = {
    name: 'park',
    age: 22,
    score: 88
}; //배열에 오브젝트를 넣는 또 하나의 방법2

console.log('persons length: ' + persons.length);

// persons[persons.length] = {
//     name: 'park',
//     age: 22,
//     score: 88
// };  배열에 오브젝트를 넣는 또 하나의 방법3 (배열길이를 알수없을때)

// for(let i =0; i< persons.length; i++) //()대신에
for (let per of persons) { //persons에 담겨져있는 배열만큼 per에 하나씩 담아라.
    console.log(per.name + ', ' + per.age + ', ' + per.score);
}


document.getElementById('show');

let ul = document.createElement('ul');
ul.setAttribute('class', 'ul');

for (let per of persons) {
    let li = document.createElement('li');
    ul.append(li);
    li.innerHTML = per.name;
 
}
    console.log(ul)

    show.append(ul);