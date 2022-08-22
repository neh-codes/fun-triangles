const sides = document.querySelectorAll(".side-input");
const isHypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

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

isHypotenuseBtn.addEventListener("click", calculateHypotenuse);
