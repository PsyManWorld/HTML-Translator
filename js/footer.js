const inputTextarea = document.querySelector(".input-textarea");
const secondTextarea = document.querySelector(".second-textarea");
const firstTextareaP = document.querySelector(".p-first-textarea");
const secondTextareaP = document.querySelector(".p-second-textarea");
const langSelect = document.querySelector(".lang-select1");
const inputTextBox = document.querySelector('#text1');
const whiteBoard = document.querySelector('#showSpans')

langSelect.value = "fa";
inputTextarea.style.textAlign = "right";
document.querySelector(".lang-select2").value = "en";

function selectLang1() {
    const x = langSelect.value;
    inputTextarea.setAttribute("id", x);
    switch (x) {
        case "fa":
            document.querySelector(".lang-select2 .fa").style.display = "none";
            document.querySelector(".lang-select2 .en").style.display = "block";
            document.querySelector(".lang-select2").value = "en";
            inputTextarea.style.textAlign = "right";
            firstTextareaP.innerHTML = "زبان مبدا: فارسی";
            secondTextareaP.innerHTML =
                "زبان مقصد: انگلیسی";
            break;

        case "en":
            document.querySelector(".lang-select2 .fa").style.display = "block";
            document.querySelector(".lang-select2 .en").style.display = "none";
            document.querySelector(".lang-select2").value = "fa";
            inputTextarea.style.textAlign = "left";
            firstTextareaP.innerHTML =
                "زبان مبدا: انگلیسی";
            secondTextareaP.innerHTML =
                "زبان مقصد: فارسی";

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
            firstTextareaP.innerHTML =
                "زبان مبدا: انگلیسی";
            secondTextareaP.innerHTML =
                "زبان مقصد: فارسی";
            break;

        case "en":
            document.querySelector(".lang-select1 .fa").style.display = "block";
            document.querySelector(".lang-select1 .en").style.display = "none";
            langSelect.value = "fa";
            secondTextarea.style.textAlign = "left";
            firstTextareaP.innerHTML = "زبان مبدا: فارسی";
            secondTextareaP.innerHTML =
                "زبان مقصد: انگلیسی";
            break;
        default:
        //Nothing
    }
}


inputTextarea.addEventListener('keyup', textChange)
inputTextarea.addEventListener('keypress', textChange)


let myArray = [];
let text;
let tempP = document.createElement("p");
let myArrayLength = 1;

function textChange() {
    text = inputTextarea.value;
    myArray = text.split(" ");
    console.log('text: ', text)
    // console.log(myArray)


    myArray.forEach(myFunction);

    function myFunction(item) {
        let wordSpan = document.createElement("span");
        let spaceSpan = document.createElement("span");
        wordSpan.setAttribute("class", "discrete-text");
        wordSpan.innerHTML = item;
        spaceSpan.innerHTML = " ";

    }

    function addNewWordToDiv() {
        tempP.innerHTML = '';
        myArray.forEach(function (item) {
            let wordSpan = document.createElement("span");
            let spaceSpan = document.createElement("span");
            wordSpan.setAttribute("class", "discrete-text");
            console.log('in the func: ', item)
            wordSpan.innerHTML = item;
            spaceSpan.innerHTML = " ";
            tempP.append(wordSpan);
            tempP.append(spaceSpan);
        });
        myArrayLength = myArray.length;
    }

    console.log('myArr: ', myArray)
    addNewWordToDiv()
    console.log(tempP)
    console.log(text[text.length - 1])
    whiteBoard.innerHTML='';
    whiteBoard.innerHTML = tempP.innerHTML
    secondTextarea.textContent = inputTextarea.textContent;
}
inputTextBox.addEventListener('click',height)
function height() {
    console.log('here')
    inputTextBox.style.height = "200px";
    secondTextarea.style.height = "200px";
}

