//array.js ok

//예제1
let intAry = [34, 52, 58, 22, 19, 30];

//1. index를 활용해서 배열의 총합
sum = 0;
for (let i = 0; i < intAry.length; i++) {
    sum += intAry[i];
}
console.log(sum);

//2. 확장 for를 활용. for...of..
sum = 0;
for (let ary of intAry) {
    sum += ary;
}
console.log(sum);

//3. 숫자리스트 document영역에 리스트로 보여주세요. ul, li
document.getElementById('show');
let ul = document.createElement('ul');
ul.setAttribute('class', 'ul');

for (let ary of intAry) {
    let li = document.createElement('li');
    ul.append(li);
    li.innerHTML = ary;
}
show.append(ul);



//4. 숫자 35, 88을 배열의 마지막 위치에 추가.
intAry.push(35, 88);
console.log(intAry);

//5. 합을 리스트의 마지막에 보여주세요.
sum = 0;
let li = document.createElement('li');
for (let Ary of intAry) {
    sum += Ary;
}
let ul1 = document.createElement('ul');
ul1.setAttribute('class', 'ul');
for (let ary of intAry) {
    let li = document.createElement('li');
    ul1.append(li);
    li.innerHTML = ary;
}
li.innerHTML = '최종합계는: ' + sum;
ul1.append(li);
show.append(ul1);

//예제2
let strAry = ['hong', 'hwang', 'park', 'choi'];
// for(let i =0; i <strAry.length; i++){

// }
for (let ary of strAry) {
    console.log(ary);
}

let boolAry = [true, false, true, 'a', 0];
let times = 0;
for (let b of boolAry) {
    if (b) {
        console.log(times++); //++: 
    }
}
console.log(times); //true가 몇번 실행됐는지 확인가능

//예제3
let p1 = {
    name: 'hong',
    age: 15

}
let p2 = {
    name: 'hwang',
    age: 20

}
let p3 = {
    name: 'park',
    age: 22

}
let persons = []; //persons라는 배열을 만들고
persons.push(p1); //p1, p2, p3를 담는다
persons.push(p2);
persons.push(p3);
console.log(persons);

// let tableTag = '<table border=1>';   //여는태그
// tableTag +='<tr><th>이름</th><th>나이</th></tr>'
// for(let p of persons){
// tableTag += '<tr><td>' + p.name + '</td><td>' + p.age + '</td></tr>'
// }
// tableTag += '</table>';    //닫는태그 추가
// console.log(tableTag);
// show.innerHTML = tableTag;

let table = document.createElement('table');
table.setAttribute('border', '1');
let tr = document.createElement('tr');
let strAry1 = ['이름', '나이'];
for (let str1 of strAry1) {
    let th = document.createElement('th');
    th.innerHTML = str1;
    tr.append(th);
}
table.append(tr);

for (let per of persons) {
    let tr1 = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = per.name;
    tr1.append(td);
    let td1 = document.createElement('td');
    td1.innerHTML = per.age;
    tr1.append(td1);
    table.append(tr1);
}
show.append(table);
console.log(table);