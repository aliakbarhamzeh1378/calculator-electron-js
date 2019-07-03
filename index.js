var displayBox = document.getElementById("history-value");
var result = document.getElementById("output-value");
const {ipcRenderer} = require('electron');
// document.querySelector('#btnEd').addEventListener('click', () => {
//     displayBox.innerHTML = "gjkgmkfgkfgnk";
// })
var operators = ['+', '-', '*', '/','%'];
var lastClick="";
function clickedNumber(val){
    
    if(lastClick=="="){
        displayBox.innerHTML ="";    
    }
    displayBox.innerHTML +=val;
    // }
}
document.querySelector('#one').addEventListener('click', () => {
    clickedNumber(1);
})
document.querySelector('#two').addEventListener('click', () => {
    clickedNumber(2);
})
document.querySelector('#three').addEventListener('click', () => {
    clickedNumber(3);
})
document.querySelector('#four').addEventListener('click', () => {
    clickedNumber(4);
})
document.querySelector('#five').addEventListener('click', () => {
    clickedNumber(5);
})
document.querySelector('#six').addEventListener('click', () => {
    clickedNumber(6);
})
document.querySelector('#seven').addEventListener('click', () => {
    clickedNumber(7);
})
document.querySelector('#eight').addEventListener('click', () => {
    clickedNumber(8);
})
document.querySelector('#nine').addEventListener('click', () => {
    clickedNumber(9);
})
document.querySelector('#zero').addEventListener('click', () => {
    clickedNumber(0);
})



function last_char(){
    var equation = displayBox.innerHTML;
    var lastChar = equation[equation.length - 1];
    return lastChar;
}

function basckspace(){
    displayBox.innerHTML=displayBox.innerHTML.substr(0, displayBox.innerHTML.length-1);
}
function doOperator(val){
    if(displayBox.innerHTML.length>0 || val =="-" || val =="+"){
    if(operators.indexOf(last_char())>-1){
        if(last_char() != val){

            basckspace()
            displayBox.innerHTML+=val;    
            lastClick="";
        }
        
    }else{

        displayBox.innerHTML+=val;
        lastClick="";
    }
}
}
document.querySelector('#devision').addEventListener('click', () => {
    doOperator("÷");
});
document.querySelector('#plus').addEventListener('click', () => {
    doOperator("+");
});
document.querySelector('#mines').addEventListener('click', () => {
    doOperator("-");
});
document.querySelector('#multiple').addEventListener('click', () => {
    doOperator("*");
});
document.querySelector('#precentage').addEventListener('click', () => {
    doOperator("%");
});
document.querySelector('#decimal').addEventListener('click', () => {
    if(last_char() != "."){
    doOperator(".");
}
});


document.querySelector('#clear').addEventListener('click', () => {
    displayBox.innerHTML="";
    result.innerHTML="";
})

document.querySelector('#backspace').addEventListener('click', () => {
    basckspace();
})
document.querySelector('#exit').addEventListener('click', () => {
    ipcRenderer.send('close-me')
});

document.querySelector('#equation').addEventListener('click',()=>{
    console.log(last_char());
    console.log(operators.indexOf(last_char()));

    if(operators.indexOf(last_char())>-1){
        result.innerHTML="ERROR";
    }else{
        var s = displayBox.innerHTML;
         s =s.replace("÷", "/");
        result.innerHTML=eval(s);
        lastClick = "=";
    }
    
})
