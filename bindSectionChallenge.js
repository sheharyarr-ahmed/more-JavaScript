"use strict";
const poll = {
  question: "what is  your favourite programming language?",
  options: ["0: JAVASCRIPT", "1: JAVA", "2: RUST", "3:C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)}`
      )
    );

    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    //this one line it sets the parameter by default to array
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`the pole results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
