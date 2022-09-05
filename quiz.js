const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = [
  "90°",
  "right-angled",
  "equilateral",
  "scalene",
  "isosceles",
  "5",
  "35cm2",
  "a2",
  "perimeter",
  "4:5",
];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputEl.innerText = "Your Score is " + score + "/10";
}

submitAnswerBtn.addEventListener("click", calculateScore);
