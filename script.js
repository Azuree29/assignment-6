const results = document.querySelector("#results");

const resets = document.getElementById("reset");
let count = 0;


function add() {
    const number1 = parseInt(document.getElementById("num1").value);
    const number2 =  parseInt(document.getElementById("num2").value);
    const result = number1 + number2;
    results.innerHTML = result;
}



function subtract() {
    const number3 = parseInt(document.getElementById("num3").value);
    const number4 =  parseInt(document.getElementById("num4").value);
    const result2 = number3 - number4;
    results.innerHTML = result2;
}


function multiply() {
    const number5 = parseInt(document.getElementById("num5").value);
    const number6 =  parseInt(document.getElementById("num6").value);
    const result3 = number5 * number6;
    results.innerHTML = result3;
}

function divide() {
    const number7 = parseInt(document.getElementById("num7").value);
    const number8 = parseInt(document.getElementById("num8").value);
    const result4 = number7 / number8;
    results.innerHTML = result4;
}


resets.addEventListener("click",() => {
results.innerHTML = "0";
})





