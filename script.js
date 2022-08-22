const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-trainagle-btn");
const outputEl = document.querySelector("#output");

function calculateOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    outputEl.innerText = "Yay! This is A Triangle.🚀";
  } else {
    outputEl.innerText =
      "Nah! This cannot be a Triangle😥. Sum of the angles should be 180°.";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
