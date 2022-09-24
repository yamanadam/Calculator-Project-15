const container = document.querySelector(".containerKeys");
let resBottom = document.querySelector("#result2");
let resTop = document.querySelector("#result1");

let number1 = "";
let number2 = "";
let opr = "";
// (e.target.classList.contains("opr") && e.target.innerText)

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    resBottom.innerText += e.target.innerText;
    number1 = Number(resBottom.innerText);

    console.log(number1);
  } else if (
    (e.target.classList.contains("opr") ||
      e.target.classList.contains("equal")) &&
    resBottom.innerText &&
    resTop.innerText
  ) {
    // number1 = Number(resBottom.innerText);
    // opr = e.target.innerText;
    console.log(number1, number2);
    resTop.innerText = calculate(number2, opr, number1);

    resBottom.innerText = " ";
    number1 = Number(resTop.innerText);
  } else if (e.target.classList.contains("opr")) {
    console.log("opr", number1, number2);
    resTop.innerText += resBottom.innerText + " " + e.target.innerText;
    resBottom.innerText = " ";
    opr = e.target.innerText;
    number2 = number1;
    number1 = "";
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
    return n1 / n2;
  }
}
