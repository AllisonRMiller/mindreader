//state = 0
let state = 0;
//array = 
//  {content="text"}
var header = ["I can read your mind.",
    "Pick a number from 01 - 99",
    "Add both digits together to get a new number",
    "Subtract your new number from the original number",
    count,
    " "];
var p = ["",
    "when you have your number click next",
    "Ex: 14 is 1 + 4 = 5<br>click next to proceed",
    "Ex: 14 - 5 = 9<br>click next to proceed",
    "Find your new number<br> Note the symbol beside your number",
    "Your symbol is"];
var btnbar = ["Next", "Next", "Next", "Next", "Reveal", " "];
var cirbtn = ["Go", "R", "R", "R", "R", "R"];
var char = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?"];
//button toggle if state = 0 button invisible else visible
//button toggle if state = 0 button go else refresh

var btn1;
var btn2;
var btn2Txt;
var btn1Txt;
var pTxt;
var headerTxt;
var cont;
var col;

function btn1Toggle() {

    if (state == 0) {
        btn1.innerHTML = "";
        btn1.setAttribute = "btn btn-primary d-none";
    }
    else if (state > 0 && state < 5) {
        btn1.innerHTML = "Next";
        btn1.setAttribute = "btn btn-primary d-block";
    }
    else {
        btn1.innerHTML = "Restart";
        btn1.setAttribute = "btn btn-primary d-block";
    }
}
function btn2Toggle() {

    if (state == 0) {
        btn2.innerHTML = "Go";
    }
    else {
        btn2.innerHTML = "R";
    }
}
function build() {
    cont = document.createElement("div");
    btn2Txt = document.createTextNode(" ");
    btn2 = document.createElement("button")
    pTxt = document.createElement("div");
    btn1Txt = document.createTextNode(" ");
    btn1 = document.createElement("button");
    headerTxt = document.createElement("div");
    var lb = document.createElement("br");

    // btn2Txt = document.getElementById("btn2");
    btn2.className = "btn btn-circle";
    btn2.addEventListener("click", listen2);
 
    // btn1Txt = document.getElementById("btn1");
    btn1.className = "btn btn-primary";
    btn1.addEventListener("click",listen);

    pTxt.innerHTML = p[state]; 
    
    headerTxt.classList = "h2";
    if(state == 4)
    {headerTxt.innerHTML=header[state]();}
    else
    {headerTxt.innerHTML = header[state];}

    cont.setID = "cont1";
    cont.classList = "container justify-content-center";

    cont.appendChild(headerTxt);
 
    if(state>0){
        btn1.appendChild(btn1Txt);
        cont.appendChild(btn1);
    }
    cont.appendChild(pTxt);

    btn2.appendChild(btn2Txt); 
    cont.appendChild(btn2);    

    document.body.appendChild(cont);

    btn1Toggle();
    btn2Toggle();
}


function reset() {
    $("body").empty();
    state = 0;
    pages();
}
function listen2() {
    if (state == 0) {
        advState();
    }
    else {
        reset();
    }
}
function listen() {
    if (state > 0 && state < 5) {
        advState();
    }
    else {reset(); }

}


//document.getElementById("h1"); element.innerHTML = " ";

//switch  ()
//pages();
//console.log(pages);
function advState() {
    $("body").empty();
    state++;
    pages();
}
// function showBtn() {
//     var btn1 = document.getElementById("btn1");
//     if (state >0 && state < 5) {
//         btn1.classList.toggle("visible")}
//         else {
//             btn1.classList.toggle("invisible")
//         }
// }
// showBtn();
function pages() {

    // document.getElementsByClassName("h2").innerHTML = headerTxt;
    // document.getElementsByClassName("p").innerHTML = pTxt;
    switch (state) {
        case 0:
            console.log("in state 0 bb")
            build();
            console.log("in state 0")
            break;
        case 1:
            build();
            console.log("in state 1")
            break;
        case 2:
            build();
            console.log("in state 2")
            break;
        case 3:
            build();
            console.log("in state 3")
            break;
        case 4:
            build();
            console.log("in state 4")
            break;
        case 5:
            build();
            console.log("in state 5")
            break;
    }
    // document.getElementsByClassName("h2").innerHTML = headerTxt;
    // document.getElementsByClassName("p").innerHTML = pTxt;
}
pages();
// function headerRep() {
//     document.getElementsByClassName("h2").innerHTML = headerTxt;
// }
// function pRep() {
//     document.getElementsByClassName("p").innerHTML = pTxt;
// }
function count() {
    //var list ="";
    //    shuffle(char);
    var table = document.createElement("TABLE");
    table.classList= "table table-borderless overflow-scroll";
    for (var i = 0; i < 100; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = i;
        cell2.innerHTML = char[i%9];
    }
    cont.appendChild(table);
}

// console.log(count);
//</br>return list;
// document.getElementById("btn1").classList.toggle("visible", state > 0 && state < 5);
// document.getElementById("btn1").classList.toggle("invisible", state == 0 || state == 5);
// function ref() {
//     if (state == 0) {
//         document.getElementById("btn2").innerHTML = "Go";
//         }
//         else {
//             document.getElementById("btn2").innerHTML = '<i class="fas fa-redo"></i>';
//         }
// }
// ref();
// console.log(ref);
//onclick next state ++  

// function reset (){
//     state=0;
// }
// function listen() {
//     if (state == 0) {
//            btn2.addEventListener("click", advState);}
//       else {
//           btn2.addEventListener("click", reset);
//   }
// }
// function listen2(){
//     if (state > 0 && state < 5){
//         btn1.addEventListener("click", advState);}
//         else {btn1.addEventListener("click", reset); }

// }
// listen();
// listen2();
// console.log(listen);

// console.log(advstate);