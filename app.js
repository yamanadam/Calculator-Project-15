const container = document.querySelector(".containerKeys");
let resBottom = document.querySelector("#result2");
let resTop = document.querySelector("#result1");

let number1 = 0;
let number2 = 0;
let opr = "";

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("ac")) {
    AcClear();
  } else if (e.target.classList.contains("point")) {
    point();
  } else if (e.target.classList.contains("num")) {
    resBottom.innerText += e.target.innerText;
    number1 = Number(resBottom.innerText);
  } else if (e.target.classList.contains("zero")) {
    zero();

    number1 = Number(resBottom.innerText);
  } else if (e.target.classList.contains("equal")) {
    if (!number1 || !number2 || !opr) {
      alert("Please enter number and operator");
      resTop.innerText = " ";
    }
    resTop.innerText = calculate(number2, opr, number1).toFixed(2);

    resBottom.innerText = " ";
    number1 = Number(resTop.innerText);
    number2 = "";
  } else if (e.target.classList.contains("opr")) {
    if (
      resTop.innerText.includes("+") ||
      resTop.innerText.includes("-") ||
      resTop.innerText.includes("*") ||
      resTop.innerText.includes("/") ||
      resTop.innerText.includes("%")
    ) {
      resTop.innerText += resBottom.innerText + " " + e.target.innerText;
    }
    if (number2) {
      resTop.innerText =
        calculate(number2, opr, number1).toFixed(2) + " " + e.target.innerText;
      resBottom.innerText = " ";

      number2 = Number(calculate(number2, opr, number1).toFixed(2));
      opr = e.target.innerText;

      number1 = "";
    } else {
      resTop.innerText += resBottom.innerText + " " + e.target.innerText;

      resBottom.innerText = " ";
      opr = e.target.innerText;
      number2 = number1;
      number1 = "";
    }
  }
});

function calculate(n1, opr, n2) {
  if (opr === "+") {
    return n1 + n2;
  } else if (opr === "-") {
    return n1 - n2;
  } else if (opr === "*") {
    return n1 * n2;
  } else if (opr === "/") {
    if (n2 == 0) {
      alert("Undefinition process");
    }
    return n1 / n2;
  } else if (opr === "%") {
    return (n1 * n2) / 100;
  }
}

function AcClear() {
  number1 = "";
  number2 = "";
  resBottom.innerText = "";
  resTop.innerText = "";
}

function point() {
  return !resBottom.innerText.includes(".") && resBottom.innerText
    ? (resBottom.innerText += ".")
    : "";
}

function zero() {
  if (resBottom.innerText.length == 1 && resBottom.innerText == "0") {
    return (resBottom.innerText = "0");
  } else {
    return (resBottom.innerText += "0");
  }
}
