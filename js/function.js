//function.js ok

function sumFunc(var1, var2) { //():실행하세요 js는 괄호 안에 변수 선언을 할 필요가 없다 밑에서 let으로 할거니깐
    let num1, num2;
    num1 = var1;
    num2 = var2;
    let result = num1 + num2;
    console.log(result);
    return result; //리턴타입이 별도로 없다
}
let sum = sumFunc(33, 44);

//
let multiFunc = function (v1, v2) {
    let num1 = v1,
        num2 = v2;
    return num1 * num2;
}
// console.log(multiFunc)  //: multiFunc의 정의를 보여줌
console.log(multiFunc(3,5)) //()를 붙이면 실행하라는 뜻


function callBackFunc(func, val1) { //func은 직접 계산이되거나 매개값으로 쓰여질수 있다
    return func(5, 7) + val1;
}
sum = callBackFunc(multiFunc, 11)

// document.write(sum); //sum한 값을 도큐 영역에 나타내라

//v1에서 v2까지의 합계를 구하시오 (앞뒤 숫자 대소관계 유의)
sum = 0;
function myfunc(v1, v2) {
    let num1, num2;
    num1 = v1;
    num2 = v2;

    if (num1 < num2) {
        for (let i = v1; i < v2; i++) {
            sum += i
        }
    } else {
        for (let i = v2; i < v1; i++) {
            sum += i
        }
    }
    return sum;
}
sum= myfunc(1,5);
document.write(sum);

sum=0;
sum = myfunc(5, 1);
document.write(", " + sum);