"use strict";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").textContent = "Validate Email";

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;

  const input = text.trim().toLowerCase();
  const hasAt = input.includes("@");
  const hasDot = input.includes(".");
  const noDoubleDot = input.replace("..", "."); //not working, best solution to add regular expression.

  if (hasAt && hasDot && noDoubleDot) {
    console.log(`this is an valid email ${input}`);
  } else {
    console.log("this is not an valid email");
  }
});
