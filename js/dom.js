console.log(this);  //그냥 this= window
// let text = this.document.children[0].children[1].innerText;  //두번째 children은 body의 요소
console.log(this.document.childNodes[1].children[1].children[0].innerHTML = 'hello'); 
//childNodes:우리 눈에는 안보이는 text노드까지 모두, children:엘리먼트만<>
console.log(this.document.childNodes[1].children[1].children[3].value);  
console.log(this.document.childNodes[1].children[1].childNodes);  //body영역의 모든node보기
console.log(this.document.childNodes[1].children[1].childNodes[10].nodeValue = 'days');