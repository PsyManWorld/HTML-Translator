const firstTextarea = document.querySelector(".first-textarea");
const secondTextarea = document.querySelector(".second-textarea");
const firstTextareaP = document.querySelector(".p-first-textarea");
const secondTextareaP = document.querySelector(".p-second-textarea");
const langSelect = document.querySelector(".lang-select1");
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
            secondTextareaP.innerHTML =
                "زبان مقصد: انگلیسی";
            break;

        case "en":
            document.querySelector(".lang-select2 .fa").style.display = "block";
            document.querySelector(".lang-select2 .en").style.display = "none";
            document.querySelector(".lang-select2").value = "fa";
            firstTextarea.style.textAlign = "left";
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


firstTextarea.addEventListener('keyup', textChange)

let myArray = [];
let text;
let tempDiv = document.createElement("spam");
let myArrayLength = 1;

function textChange() {
    text = firstTextarea.textContent;

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
        tempDiv.innerHTML = '';
        myArray.forEach(function (item) {
            let wordSpan = document.createElement("span");
            let spaceSpan = document.createElement("span");
            wordSpan.setAttribute("class", "discrete-text");
            console.log('in the func: ', item)
            wordSpan.innerHTML = item;
            spaceSpan.innerHTML = " ";
            tempDiv.append(wordSpan);
            tempDiv.append(spaceSpan);
        });
        myArrayLength = myArray.length;
    }

    console.log('myArr: ', myArray)
    // if (myArray.length > myArrayLength) {
    //
    //     addNewWordToDiv()
    // } else if (text[text.length - 1] === ' ') {
    //     console.log('last word is space')
    //     addNewWordToDiv()
    // }else{
    //     addNewWordToDiv()
    // }
    addNewWordToDiv()
    console.log(tempDiv)
    console.log(text[text.length - 1])
    // firstTextarea.innerHTML='';
    // firstTextarea.innerHTML = tempDiv.innerHTML
    secondTextarea.textContent = firstTextarea.textContent;
}

function height() {
    firstTextarea.style.height = "200px";
    secondTextarea.style.height = "200px";
}

