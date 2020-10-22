//multiply.js
let show = document.getElementById('show');
for(let i = 2; i<=9; i++){
    for(let j = 1; j<=9; j++){
    // document.write('<div>' + i + '*' + j + '=' + (i*j) +'</div>');
    let div = document.createElement('div');
    div.innerHTML = i + '*' + j + '=' + (i*j);
    show.append(div);
    }
    // document.write('<div class = "row"> </div>');
    let row = document.createElement('div');
    row.setAttribute('class', 'row');
    show.append(row);
}
    

