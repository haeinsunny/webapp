//object_date.js  //Date는 이미 존재하는 오브젝트

document.getElementById('result').innerHTML = new Date(2020,10, 10, 10, 15, 22);  //월 시작은 0부터 (10 = 11월)

let showBtn = document.getElementById('showBtn');
showBtn.onclick = function(){
    let year = document.querySelector('input[name="year"]').value;
    let month = document.querySelector('input[name="month"]').value;
    let day = document.querySelector('input[name="day"]').value;

    console.log(year, month, day);
    let today = new Date(year, month, 0);  //해당월의 마지막 날. -1:이틀 전날 0:하루 전날 1: 1일
    console.log(today.getDate());  //getDate(): Date 마지막에 0을 집어넣어서 마지막날을 알수있음 
    let today1 = new Date(year, month -1, 1);
    console.log(today1.getDay()); //getDay(): 메소드임. Date입력값의 요일을 숫자로 나타내줌
   
    document.getElementById('result').innerHTML = today;

    //달력만들기
    //해당월의 전체일수: totalDay
    //해당월의 1일의 요일정보: firstDay
    //SHOW 버튼 누르면 해당 달력 뜨게
    //일요일: 빨간색, 토요일: 파란색
    //내가 넣은 해당 날: 볼드체 등 의미주기
    let totalDay = today.getDate();  //마지막 일
    let firstDay = today1.getDay();  //시작 일
    let calTag = '<table border ="1">'; 
    calTag += '<tr></td></td></td>';
    for(let i = 0; i < firstDay; i++){
        calTag +='<td>' + '&nbsp' + '</td>';
        if(i % 7 == 6){
            calTag += '</tr><tr>';
        }
    }
    for(let i = ; i < totalDay; i++){         
        calTag += '<td>' + (i+1) + '</td>';
        if(i % 7 == 6){
            calTag += '</tr><tr>';
        }
    }
    calTag += '</tr></table>';
    document.getElementById('result').innerHTML = calTag;

}