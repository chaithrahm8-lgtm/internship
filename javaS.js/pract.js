// let title = document.querySelector('#demo');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click' , function(){
//     title.innerText = "you clicked the button";
// });

// let textarea = document.querySelector('#sys');
// let button = document.querySelector('#btn');
// let para = document.querySelector('#output');

// button.addEventListener('click', function(){
//     para.innerText = textarea.value;
// });

let select = document.querySelector('#cityselect');
let para = document.querySelector('#result');
 
select.addEventListener('change', function(event){
    console.log(event)
    if (event.target.value === "") {
        para.innerText = "";
    } else {
        let selectedText =
            event.target.options[event.target.selectedIndex].text;
        para.innerText = "You selected: " + selectedText;
    }
});