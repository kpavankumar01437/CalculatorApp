let display = document.getElementById("display");

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    display.value += this.getAttribute("data-value");
  });
});

document.getElementById("equal").addEventListener("click", function () {
  try {
    display.value = eval(display.value);
  } catch {
    alert("Invalid Calculation");
    display.value = "";
  }
});

document.getElementById("clear").addEventListener("click", function () {
  display.value = "";
});
