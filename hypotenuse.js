const sides = document.querySelectorAll(".side-input");
const isHypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function validate() {
  if (sides[0].value === "" || sides[1].value === "")
    output.innerText = "Please enter both values";
  else if (Number(sides[0].value <= 0) || Number(sides[1].value <= 0))
    output.innerText = "Both values should be greater than zero";
  else calculateHypotenuse(Number(sides[0].value), Number(sides[1].value));
}
function calculateSumOfSquares(a, b) {
  const SumOfSquares = a * a + b * b;
  return SumOfSquares;
}

function calculateHypotenuse() {
  const SumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(SumOfSquares);
  outputEl.innerText = "Length of Hypotenuse is " + lengthOfHypotenuse;
}

isHypotenuseBtn.addEventListener("click", validate);
