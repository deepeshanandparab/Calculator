var lbl = document.getElementById('display_label');
var equation = document.getElementById('equation');


/*-------------------------Operator Functions-------------------------*/
function insertSqrt(){
    lbl.value += document.getElementById('sqrt').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertSquare(){
    lbl.value += document.getElementById('square').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertModulo(){
    lbl.value += document.getElementById('modulo').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertPlus(){
    lbl.value += document.getElementById('plus').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertMinus(){
    lbl.value += document.getElementById('minus').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertMultiply(){
    lbl.value += document.getElementById('multiply').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertDivide(){
    lbl.value += document.getElementById('divide').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

/*--------------------Number functions------------------*/
function insertOne(){
    lbl.value += document.getElementById('num1').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertTwo(){
    lbl.value += document.getElementById('num2').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertThree(){
    lbl.value += document.getElementById('num3').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertFour(){
    lbl.value += document.getElementById('num4').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertFive(){
    lbl.value += document.getElementById('num5').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertSix(){
    lbl.value += document.getElementById('num6').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertSeven(){
    lbl.value += document.getElementById('num7').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertEight(){
    lbl.value += document.getElementById('num8').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertNine(){
    lbl.value += document.getElementById('num9').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertZero(){
    lbl.value += document.getElementById('num0').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

function insertDecimal(){
    lbl.value += document.getElementById('decimal').value;
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "block";
}

/*----------------------------------- Clear Entries --------------------------*/
function clearEntry() {
    var lbl = document.getElementById('display_label');
    lbl.value = "";
    equation.value = lbl.value;
    document.getElementById("answer_label").style.display = "none";
}

function deleteByOne() {
    lbl.value = lbl.value.substring(0, lbl.value.length - 1);
     equation.value = lbl.value;
}