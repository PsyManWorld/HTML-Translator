// Have Bug in Changing langselect2
document.querySelector(".langselect1").value = "fa";
document.querySelector(".firsttexterea").style.textAlign = "right";
document.querySelector(".langselect2").value = "en";

function selectlang1() {
    var x = document.querySelector(".langselect1").value;
    document.querySelector(".firsttexterea").setAttribute("id", x);
    switch (x) {
        case "fa":
            document.querySelector(".langselect2 .fa").style.display = "none";
            document.querySelector(".langselect2 .en").style.display = "block";
            document.querySelector(".langselect2").value = "en";
            document.querySelector(".firsttexterea").style.textAlign = "right";
            document.querySelector(".p-firsttexterea").innerHTML = "زبان مبدا: فارسی"
            document.querySelector(".p-secondtexterea").innerHTML = "زبان مقصد: انگلیسی"
            break;

        case "en":
            document.querySelector(".langselect2 .fa").style.display = "block";
            document.querySelector(".langselect2 .en").style.display = "none";
            document.querySelector(".langselect2").value = "fa";
            document.querySelector(".firsttexterea").style.textAlign = "left";
            document.querySelector(".p-firsttexterea").innerHTML = "زبان مبدا: انگلیسی"
            document.querySelector(".p-secondtexterea").innerHTML = "زبان مقصد: فارسی"

            break;
        default:
            //Nothing
    }
}

function selectlang2() {
    var x = document.querySelector(".langselect2").value;
    document.querySelector(".secondtexterea").setAttribute("id", x);
    switch (x) {
        case "fa":
            document.querySelector(".langselect1 .fa").style.display = "none";
            document.querySelector(".langselect1 .en").style.display = "block";
            document.querySelector(".langselect1").value = "en";
            document.querySelector(".secondtexterea").style.textAlign = "right";
            document.querySelector(".p-firsttexterea").innerHTML = "زبان مبدا: انگلیسی"
            document.querySelector(".p-secondtexterea").innerHTML = "زبان مقصد: فارسی"
            break;

        case "en":
            document.querySelector(".langselect1 .fa").style.display = "block";
            document.querySelector(".langselect1 .en").style.display = "none";
            document.querySelector(".langselect1").value = "fa";
            document.querySelector(".secondtexterea").style.textAlign = "left";
            document.querySelector(".p-firsttexterea").innerHTML = "زبان مبدا: فارسی"
            document.querySelector(".p-secondtexterea").innerHTML = "زبان مقصد: انگلیسی"
            break;
        default:
            //Nothing
    }
}

function textchange() {
    document.querySelector(".secondtexterea").value = document.querySelector(".firsttexterea").value;
}

function height() {

    document.querySelector(".firsttexterea").style.height = "200px"
    document.querySelector(".secondtexterea").style.height = "200px"

}