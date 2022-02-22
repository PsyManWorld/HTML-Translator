
document.querySelector(".lang-select1").value = "fa";
document.querySelector(".first-textarea").style.textAlign = "right";
document.querySelector(".lang-select2").value = "en";

function selectLang1() {
  const x = document.querySelector(".lang-select1").value;
  document.querySelector(".first-textarea").setAttribute("id", x);
  switch (x) {
    case "fa":
      document.querySelector(".lang-select2 .fa").style.display = "none";
      document.querySelector(".lang-select2 .en").style.display = "block";
      document.querySelector(".lang-select2").value = "en";
      document.querySelector(".first-textarea").style.textAlign = "right";
      document.querySelector(".p-first-textarea").innerHTML = "زبان مبدا: فارسی";
      document.querySelector(".p-second-textarea").innerHTML =
        "زبان مقصد: انگلیسی";
      break;

    case "en":
      document.querySelector(".lang-select2 .fa").style.display = "block";
      document.querySelector(".lang-select2 .en").style.display = "none";
      document.querySelector(".lang-select2").value = "fa";
      document.querySelector(".first-textarea").style.textAlign = "left";
      document.querySelector(".p-first-textarea").innerHTML =
        "زبان مبدا: انگلیسی";
      document.querySelector(".p-second-textarea").innerHTML =
        "زبان مقصد: فارسی";

      break;
    default:
    //Nothing
  }
}

function selectLang2() {
  var x = document.querySelector(".lang-select2").value;
  document.querySelector(".second-textarea").setAttribute("id", x);
  switch (x) {
    case "fa":
      document.querySelector(".lang-select1 .fa").style.display = "none";
      document.querySelector(".lang-select1 .en").style.display = "block";
      document.querySelector(".lang-select1").value = "en";
      document.querySelector(".second-textarea").style.textAlign = "right";
      document.querySelector(".p-first-textarea").innerHTML =
        "زبان مبدا: انگلیسی";
      document.querySelector(".p-second-textarea").innerHTML =
        "زبان مقصد: فارسی";
      break;

    case "en":
      document.querySelector(".lang-select1 .fa").style.display = "block";
      document.querySelector(".lang-select1 .en").style.display = "none";
      document.querySelector(".lang-select1").value = "fa";
      document.querySelector(".second-textarea").style.textAlign = "left";
      document.querySelector(".p-first-textarea").innerHTML = "زبان مبدا: فارسی";
      document.querySelector(".p-second-textarea").innerHTML =
        "زبان مقصد: انگلیسی";
      break;
    default:
    //Nothing
  }
}

function textChange() {
  document.querySelector(".second-textarea").textContent =
    document.querySelector(".first-textarea").textContent;
  let text1 = document.querySelector(".first-textarea").textContent;
   

  const myArray = text1.split(" ");
  myArray.forEach(myFunction);

  function myFunction(items) {
    let wordSpan = document.createElement("span");
    let spaceSpan = document.createElement("span");
    wordSpan.setAttribute("class", "discrete-text");

    wordSpan.innerHTML = items;
    spaceSpan.innerHTML = " ";

    document.querySelector(".first-textarea").append(wordSpan);
    document.querySelector(".first-textarea").append(spaceSpan);
  }
}

function height() {
  document.querySelector(".first-textarea").style.height = "200px";
  document.querySelector(".second-textarea").style.height = "200px";
}

