var plusstatus;
var minusstatus;
var divisionstatus;
var multiplystatus;
var percentstatus;
var decimalstatus;
var input1;

function equalsbutton() {
    if (plusstatus == true) {
        var input2 = document.getElementById("display").innerHTML;
        var addtogether = parseFloat(input1) + parseFloat(input2);
        document.getElementById("display").innerHTML = addtogether;
        plusstatus = false;
    } else if (minusstatus == true) {
        var input2 = document.getElementById("display").innerHTML;
        var addtogether = parseFloat(input1) - parseFloat(input2);
        document.getElementById("display").innerHTML = addtogether;
        minusstatus = false;
    } else if (divisionstatus == true) {
        var input2 = document.getElementById("display").innerHTML;
        var addtogether = parseFloat(input1) / parseFloat(input2);
        document.getElementById("display").innerHTML = addtogether;
        divisionstatus = false;
    } else if (multiplystatus == true) {
        var input2 = document.getElementById("display").innerHTML;
        var addtogether = parseFloat(input1) * parseFloat(input2);
        document.getElementById("display").innerHTML = addtogether;
        multiplystatus = false;
    } else if (decimalstatus == true) {
        var input2 = document.getElementById("display").innerHTML;
        var addtogether = parseFloat(input1) . parseFloat(input2);
        document.getElementById("display").innerHTML = addtogether;
        decimalstatus = false;
    }
}

function percent() {
    input1 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = input1 / 100;
    percentstatus = true;
}

function subtractbutton() {
    input1 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    minusstatus = true;
}

function addbutton() {
    input1 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    plusstatus = true;
}

function divisionbutton() {
    input1 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    divisionstatus = true;
}

function timesbutton() {
    input1 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = "";
    multiplystatus = true;
}

function decimalpoint() {
    input1 = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =input1 + ".";
    decimalstatus = true;
}

function buttonone() {
    var result = document.getElementById("display").innerHTML;
    if (result == "") {
        document.getElementById("display").innerHTML = 1;
    } else {
        document.getElementById("display").innerHTML = result + 1;
    }
}

function buttontwo() {
    var result = document.getElementById("display").innerHTML;
    if (result == "") {
        document.getElementById("display").innerHTML = 2;
    } else {
        document.getElementById("display").innerHTML = result + 2;
    }
}

function buttonthree() {
    var result = document.getElementById("display").innerHTML;
    if (result == "") {
        document.getElementById("display").innerHTML = 3;
    } else {
        document.getElementById("display").innerHTML = result + 3;
    }
}

function buttonfour() {
    var result = document.getElementById("display").innerHTML;
    if (result == "") {
        document.getElementById("display").innerHTML = 4;
    } else {
        document.getElementById("display").innerHTML = result + 4;
    }
}

function buttonfive() {
    var result = document.getElementById("display").innerHTML;
    if (result == "") {
        document.getElementById("display").innerHTML = 5;
    } else {
        document.getElementById("display").innerHTML = result + 5;
    }
}

function buttonsix() {
    var result = document.getElementById("display").innerHTML;
    if (result == "") {
        document.getElementById("display").innerHTML = 6;
    } else {
        document.getElementById("display").innerHTML = result + 6;
    }
}

function buttonseven() {
    var result = document.getElementById("display").innerHTML;
    if (result == "") {
        document.getElementById("display").innerHTML = 7;
    } else {
        document.getElementById("display").innerHTML = result + 7;
    }
}

function buttoneight() {
    var result = document.getElementById("display").innerHTML;
    if (result == "") {
        document.getElementById("display").innerHTML = 8;
    } else {
        document.getElementById("display").innerHTML = result + 8;
    }
}

function buttonnine() {
    var result = document.getElementById("display").innerHTML;
    if (result == "") {
        document.getElementById("display").innerHTML = 9;
    } else {
        document.getElementById("display").innerHTML = result + 9;
    }
}

function buttonzero() {
    var result = document.getElementById("display").innerHTML;
    if (result == "") {
        document.getElementById("display").innerHTML = 0;
    } else {
        document.getElementById("display").innerHTML = result + 0;
    }
}

function buttondoublezero() {
    var result = document.getElementById("display").innerHTML;
    if (result == "") {
        document.getElementById("display").innerHTML = "00";
    } else {
        document.getElementById("display").innerHTML = result + "00";
    }
}

function switchonoffbutton1() {
    document.getElementById("display").innerHTML = "";
}