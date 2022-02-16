var langcounterfa1 = 0;
var langcounterfa2 = 0;
var langcounteren1 = 0;
var langcounteren2 = 0;
var totalcounter = 0;

function farsi1() {
    if (langcounterfa1 % 2 == 0) {
        document.querySelector(".firsttexterea").setAttribute("id", "fa");
        document.querySelector(".Farsi1").style.background = "green";
        document.querySelector(".Farsi2").style.display = "none";
    } else {
        document.querySelector(".Farsi1").style.background = "white";
        document.querySelector(".Farsi2").style.display = "inline";

    }
    langcounterfa1++;
    totalcounter++;

}

function farsi2() {
    if (langcounterfa2 % 2 == 0) {
        document.querySelector(".secondtexterea").setAttribute("id", "fa");
        document.querySelector(".Farsi2").style.background = "green";
        document.querySelector(".Farsi1").style.display = "none";
    } else {
        document.querySelector(".Farsi2").style.background = "white";
        document.querySelector(".Farsi1").style.display = "inline";

    }
    langcounterfa2++;
}

function english1() {

    if (langcounterfa1 % 2 == 0) {
        document.querySelector(".firsttexterea").setAttribute("id", "en");
        document.querySelector(".English1").style.background = "green";
        document.querySelector(".English2").style.display = "none";
    } else {
        document.querySelector(".English1").style.background = "white";
        document.querySelector(".English2").style.display = "inline";

    }
    langcounterfa1++;

}

function english2() {
    if (langcounteren2 % 2 == 0) {
        document.querySelector(".secondtexterea").setAttribute("id", "en");
        document.querySelector(".English2").style.background = "green";
        document.querySelector(".English1").style.display = "none";
    } else {
        document.querySelector(".English2").style.background = "white";
        document.querySelector(".English1").style.display = "inline";

    }
    langcounteren2++;
}