const keys = document.querySelector(".keys");
let resTop = document.querySelector(".resultTop");
let resBot = document.querySelector(".resultBottom");

let opr = "";

let num1;
let num2;

keys.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("ac")) {
    AcClear();
  }

  if (e.target.classList.contains("arrow")) {
    resTop.innerText = (num1 || num2) ** 0.5;
    resBot.innerText = "";
    num2 = (num1 || num2) ** 0.5;
  }

  if (e.target.classList.contains("zero") && !resBot.innerText) {
    resBot.innerText = "0";
  }

  if (
    e.target.classList.contains("zero") &&
    (resBot.innerText[0] != "0" || resBot.innerText.slice(0, 2) == "0.")
  ) {
    resBot.innerText += "0";
  }

  if (
    e.target.classList.contains("point") &&
    !resBot.innerText.includes(".") &&
    resBot.innerText.length >= 1
  ) {
    resBot.innerText += ".";
  }

  if (e.target.classList.contains("num")) {
    if (resBot.innerText.length == 1 && resBot.innerText.includes("0")) {
      resBot.innerText = "";
    }
    resBot.innerText += e.target.innerText;
  }

  num1 = Number(resBot.innerText);
  console.log("Num1:", num1, "Num2:", num2, "opr:", opr);

  if (e.target.classList.contains("opr")) {
    if (!resTop.innerText && !resBot.innerText) {
      return;
    } else {
      if (opr && !num1) {
        opr = e.target.innerText;
        resTop.innerText = "";
        resTop.innerText = num2 + opr;
        num1 = "";
        console.log("Num1:", num1, "Num2:", num2, "opr:", opr);
      } else if (num2 && num1) {
        resTop.innerText =
          calculate(num1, opr, num2) + " " + e.target.innerText;

        resBot.innerText = "";
        num2 = calculate(num1, opr, num2);
        opr = e.target.innerText;
        num1 = "";

        console.log("Num1:", num1, "Num2:", num2, "opr:", opr);
      } else if (num2 && !num1 && !opr) {
        opr = e.target.innerText;
        resTop.innerText = num2 + " " + opr;
        console.log("Num1:", num1, "Num2:", num2, "opr:", opr);
      } else {
        resTop.innerText += resBot.innerText + " " + e.target.innerText;
        resBot.innerText = "";
        opr = e.target.innerText;
        num2 = num1;
        num1 = "";
        // calculate(num1, opr, num2);
        console.log("Num1:", num1, "Num2:", num2, "opr:", opr);
      }
    }
  }
  if (e.target.classList.contains("equal")) {
    if (!num1 || !num2 || !opr) {
      alert("Please enter number and operator");
      resTop.innerText = num2 || num1 + " " + opr;
      resBot.innerText = " ";
      num2 = Number(resTop.innerText);
    } else {
      resTop.innerText = calculate(num1, opr, num2);

      resBot.innerText = " ";
      num2 = calculate(num1, opr, num2);
      num1 = "";
      opr = "";
      console.log("Num1:", num1, "Num2:", num2, "opr:", opr);
    }
  }
});

function calculate(n1, opr, n2) {
  let res = 0;
  if (opr == "+") {
    res = n1 + n2;
  } else if (opr == "-") {
    res = n2 - n1;
  } else if (opr == "*") {
    res = n1 * n2;
  } else if (opr == "÷") {
    if (n1 == 0) {
      alert("Undefinition process");
      return 0;
    }
    res = n2 / n1;
  } else if (opr == "%") {
    res = n2 * (n1 / 100);
  }
  if (String(res).length > 8) {
    res = String(res).slice(0, 9);
  }
  return Number(res);
}

function AcClear() {
  num1 = "";
  num2 = "";
  opr = "";
  resBot.innerText = "";
  resTop.innerText = "";
}
