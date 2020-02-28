
let state = 0;

var char = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?"];
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
var btn1;
var btn2;
var btn2Txt;
var btn1Txt;
var pTxt;
var headerTxt;
var cont;
var col;
//Toggles the appearance of next button
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

//Toggles the appearance of reset button
function btn2Toggle() {

    if (state == 0) {
        btn2.innerHTML = "Go";
    }
    else {
        btn2.innerHTML = "R";
    }
}

//Builds the webpage
function build() {
    //Creates the elements to be displayed 
    cont = document.createElement("div");
    cont2 = document.createElement("div");
    btn2Txt = document.createTextNode(" ");
    btn2 = document.createElement("button")
    pTxt = document.createElement("div");
    btn1Txt = document.createTextNode(" ");
    btn1 = document.createElement("button");
    headerTxt = document.createElement("div");


    //Sets behavior and defines class for elements to be displayed 
    btn2.className = "btn btn-circle";
    btn2.addEventListener("click", listen2);
 

    btn1.className = "btn btn-primary";
    btn1.addEventListener("click",listen);

    pTxt.innerHTML = p[state]; 
    
    headerTxt.classList = "h2";
    if(state == 4)
        {header[state]();}
    else if (state == 5)
        {headerTxt.innerHTML = char[0];}
    else
        {headerTxt.innerHTML = header[state];}

    cont2.setID = "cont2";
    cont.classList = "container-flex h-50 w-100 m-1 justify-content-center overflow-y:auto"

    cont.setID = "cont1";
    cont.classList = "container justify-content-center overflow-auto bg-light";

    //Places elements on the page
    cont2.appendChild(headerTxt);

    cont.appendChild(cont2);

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

//Function to return to first page
function reset() {
    $("body").empty();
    state = 0;
    pages();
}
//advances state on click or resets on click
function listen2() {
    if (state == 0) {
        advState();
    }
    else {
        reset();
    }
}

//advances state on click or resets on click
function listen() {
    if (state > 0 && state < 5) {
        advState();
    }
    else {reset(); }

}

//Function to advance state
function advState() {
    $("body").empty();
    state++;
    pages();
}

//switch to manage state
function pages() {

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

}
pages();

//Creates table, populates table
function count() {

    shuffle();
    var table = document.createElement("TABLE");
    table.classList= "table table-responsive table-borderless";
    for (var i = 0; i < 100; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = i;
        cell2.innerHTML = char[i%9];
    }
    cont2.appendChild(table);
}

//Randomizes the characters to be displayed.  See more info below
function shuffle(){
    for (let i = char.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = char[i];
        char[i] = char[j];
        char[j] = temp;
    }
}

// Function shuffle derived from example found in https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb as a better solution than the commonly referenced array.sort(function (a, b) { return 0.5 — Math.random() })
//decrementing the array length on every "run" in order to prevent re-shuffling of already randomized character and creating a placeholder to hold a character that is being returned to the sequence prior to next decrement
