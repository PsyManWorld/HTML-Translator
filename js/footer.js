const firstTextarea = document.querySelector(".first-textarea");
const secondTextarea = document.querySelector(".second-textarea");
const firstTextareaP = document.querySelector(".p-first-textarea");
const secondTextareaP = document.querySelector(".p-second-textarea");
const langSelect = document.querySelector(".lang-select1");
let timoutparameter = 1500;
langSelect.value = "fa";
firstTextarea.style.textAlign = "right";
document.querySelector(".lang-select2").value = "en";

function selectLang1() {
    const x = langSelect.value;
    firstTextarea.setAttribute("id", x);
    switch (x) {
        case "fa":
            document.querySelector(".lang-select2 .fa").style.display = "none";
            document.querySelector(".lang-select2 .en").style.display = "block";
            document.querySelector(".lang-select2").value = "en";
            firstTextarea.style.textAlign = "right";
            firstTextareaP.innerHTML = "زبان مبدا: فارسی";
            secondTextareaP.innerHTML = "زبان مقصد: انگلیسی";
            break;

        case "en":
            document.querySelector(".lang-select2 .fa").style.display = "block";
            document.querySelector(".lang-select2 .en").style.display = "none";
            document.querySelector(".lang-select2").value = "fa";
            firstTextarea.style.textAlign = "left";
            firstTextareaP.innerHTML = "زبان مبدا: انگلیسی";
            secondTextareaP.innerHTML = "زبان مقصد: فارسی";

            break;
        default:
            //Nothing
    }
}

function selectLang2() {
    let x = document.querySelector(".lang-select2").value;
    secondTextarea.setAttribute("id", x);
    switch (x) {
        case "fa":
            document.querySelector(".lang-select1 .fa").style.display = "none";
            document.querySelector(".lang-select1 .en").style.display = "block";
            langSelect.value = "en";
            secondTextarea.style.textAlign = "right";
            firstTextareaP.innerHTML = "زبان مبدا: انگلیسی";
            secondTextareaP.innerHTML = "زبان مقصد: فارسی";
            break;

        case "en":
            document.querySelector(".lang-select1 .fa").style.display = "block";
            document.querySelector(".lang-select1 .en").style.display = "none";
            langSelect.value = "fa";
            secondTextarea.style.textAlign = "left";
            firstTextareaP.innerHTML = "زبان مبدا: فارسی";
            secondTextareaP.innerHTML = "زبان مقصد: انگلیسی";
            break;
        default:
            //Nothing
    }
}

firstTextarea.addEventListener("keyup", textChange);

let myArray = [];
let text;
let tempDiv = document.createElement("spam");
let myArrayLength = 1;
let myTimeout = setTimeout(() => {}, timoutparameter);

function textChange() {
    myStopFunction();

    myTimeout = setTimeout(timeout, timoutparameter);

    function myStopFunction() {
        clearTimeout(myTimeout);
    }

    text = firstTextarea.textContent;
    myArray = text.split(" ");
    myArray = myArray.filter(function(entry) { return entry.trim() != ''; });
    // console.log("text: ", text);
    myArray.forEach(myFunction);

    function myFunction(item) {
        let wordSpan = document.createElement("span");
        let spaceSpan = document.createElement("span");
        wordSpan.setAttribute("class", "discrete-text");
        wordSpan.innerHTML = item;
        spaceSpan.innerHTML = " ";
    }


    function addNewWordToDiv() {
        tempDiv.innerHTML = "";
        myArray.forEach(function(item) {
            let wordSpan = document.createElement("span");
            let spaceSpan = document.createElement("span");
            wordSpan.setAttribute("class", "discrete-text");
            // console.log("in the func: ", item);

            wordSpan.innerHTML = item;
            spaceSpan.innerHTML = " ";
            tempDiv.append(wordSpan);
            tempDiv.append(spaceSpan);

        });
        myArrayLength = myArray.length;
    }

    // console.log("myArr: ", myArray);

    addNewWordToDiv();
    // console.log(tempDiv);
    // console.log(myArray);
    // console.log(text[text.length - 1]);



    function timeout() {

        // firstTextarea.innerHTML = tempDiv.innerHTML;

        // const el = document.getElementById('text1');
        // const selection = window.getSelection();
        // const range = document.createRange();
        // selection.removeAllRanges();
        // range.selectNodeContents(el);
        // range.collapse(false);
        // selection.addRange(range);
        // el.focus();

        secondTextarea.textContent = firstTextarea.textContent;

    }
    // console.log(myArray);
}

function height() {
    firstTextarea.style.height = "200px";
    secondTextarea.style.height = "200px";
}