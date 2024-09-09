/**
 * Training Project
 * Source: flexcourses.com
 * */

const keys = document.querySelector(".calc-keys");
const display = document.getElementById("display");
let tester = false;

keys.addEventListener("click", (event) => {
  let target = event.target;

  if (!target.matches("button")) {
    return false;
  }

  if (target.classList.contains("equal")) {
    try {
      let result = eval(display.value);
      display.value = result;
      tester = false;
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert("You have an error, I will remove your operation");
        display.value = "";
      }
    }
  } else if (target.classList.contains("all-clear")) {
    display.value = "";
  } else {
  if(isNaN(Number(target.value)) && display.value === "") { return;}
    if (
      (!isNaN(Number(display.value)) ||  display.value === "") ||
      (!isNaN(Number(target.value)) && Number(display.value)) ||
      (isNaN(Number(target.value)) && Number(display.value)) ||(!isNaN(Number(target.value)) && display.value === "" || isNaN(Number(display.value)) && Number(target.value) )
    ) {
      display.value += target.value;
    }
  }
});
