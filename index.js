// This function clear all the values


function clearallvalue() {
    document.getElementById("result").value = "";
}

// This function display values
function dis(num) {
    document.getElementById("result").value += num;
}

// This function returns result

function solve() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

// This function delete last digit

function deletelastdigit() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1)
}

