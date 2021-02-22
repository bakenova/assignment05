const brideducation = document.querySelector(".education");
const fNet = document.querySelector(".fnet");
const price = document.querySelector(".qprice");
const submit = document.getElementById("submit");

var age_c = new Array();
age_c["18"] = 1.5;
age_c["24"] = 1.2;
age_c["28"] = 0.95;

submit.addEventListener('click', calculate)

function calculate() {
    if (fNet.options[fNet.selectedIndex].text == "More than 100,000$") {
        answer = 500 * 2;
    } else if (fNet.options[fNet.selectedIndex].text == "Between 50,000$ and 100,000$") {
        answer = 500 * 1.5;
    } else if (fNet.options[fNet.selectedIndex].text == "Less than 50,000$") {
        answer = 500 * 1.2;
    }

    if (brideducation.options[brideducation.selectedIndex].text == "Bachelor degree") {
        answer = answer * 1.5;
    } else if (brideducation.options[brideducation.selectedIndex].text == "College degree") {
        answer = answer * 1.2;
    } else if (brideducation.options[brideducation.selectedIndex].text == "High school degree") {
        answer = answer * 1.05;
    } else
        answer = answer * 0.9;

    var skills = document.getElementsByTagName("input");
    for (var i = 0; i < 4; i++) {
        if (skills[i].checked) {
            answer += (skills[i].value * 1);
        }
    }

    var theForm = document.forms["age"];
    var vozrast = theForm.elements["vozrast"]
    for (var i = 0; i < vozrast.length; i++) {
        if (vozrast[i].checked) {
            answer *= age_c[vozrast[i].value];
        }
    }

    var selectedRealistic = document.getElementsByClassName("gossips");
    for (var i = 0; i < 3; i++) {
        if (selectedRealistic[i].checked && i == 0) {
            answer *= 0.85;
        } else if (selectedRealistic[i].checked && i == 1) {
            answer *= 0.9;
        } else if (selectedRealistic[i].checked && i == 2) {
            answer -= 200;
        }
    }
    price.innerHTML = "Price you are going to pay for QalynMal is $" + answer;
};