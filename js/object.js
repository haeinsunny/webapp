//object.js ok

let person1 = {
    firstName: 'Kildong',
    lastName: 'Hong',
    age: 15,
    setName: function (name) { //functions의 필드에 정의를 해주면 기능정의 메소드가 됨
        this.firstname = name;
    },
    fullName: function () { //fullname의 기능담당 메소드
        return this.firstName + ', ' + this.lastName;
    }
}

person1.firstName;
console.log(person1.lastName);
person1.setName('Nice');
console.log(person1.fullName()); //function정의구문이 있어서 ()하면 함수를 실행한값이 반환된다  


//string관련 메소드
let str = new String('Hello');
let newStr = str.replace('l', 'r'); //replace: str오브젝트가 가지고있는 메소드들 중의 하나
console.log(newStr); //newStr: str문자 l을 r로 바꿔줌    

console.log(str.length) //str의 문자개수를 보여주는 메소드

let text = '   Please locate where "locate" occurs!   ';

let loc = text.indexOf('locates'); //indextOf메소드: 해당 변수가 문자열 몇번째에 위치하는지 

if (loc != -1) {    // 'locates'같이 일치하는 문자가 없으면 default -1로 뜸
    console.log(loc);

} else {
    console.log('값을 찾을수 없습니다.');
}

let subString = text.substring(3, 9); //substring: 시작 매개값 포함, 마지막 매개값은 포함하지않고 그사이의 문자열 값을 가져오는 메소드
console.log(subString);

let subStr= text.substr(10, 6);  //substr: 7번째 문자열부터 6개 문자를 잘라 보여줌
console.log(subStr);

let strSlice = text.slice(-18, -12); //slice: substring과 비슷하지만 slice는 -로 뒷부분으로부터 잘라올 수 있다.
console.log(strSlice);
console.log(text);

//trim은 문자열의 앞뒤 빈공간 자르기---????

let url = 'https://www.daum.net';
let firstPos = url.indexOf('.');
let lastPos = url.lastIndexOf('.');
console.log(url.substring(firstPos + 1, lastPos));  //처음 매개값 포함과 두번째 매개값 미포함 사이의 값을 읽어옴
console.log(url.substring(firstPos + 1));//두번째 매개값 지정하지 않으면 끝까지 읽어옴  

let ary = 'apple,melon,mango,banana';
let strAry = ary.split(',');   //split: 배열의 문자값을 하나하나 가져옴
for(let str of strAry){
    console.log(str);
}

let str1= 'JavaScript is the programming language of the Web.'
let str1Ary = str1.split(' ');
let newText = document.getElementById('new');
for(let str of str1Ary){
newText.innerHTML += '<button>' + str + '</button>';   //string문자열을 가지고와서 배열을 만들고 button생성
}


