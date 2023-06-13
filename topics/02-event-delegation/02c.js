const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const slider = document.querySelector(".range-slider");
const display = document.querySelector(".display-range");

const displayValue = () => {
  display.textContent = slider.value;
};

slider.addEventListener("input", displayValue);

const generateBtn = document.querySelector("button[data-generate]");
const resetBtn = document.querySelector("button[data-reset]");

//funkcja tworząca boxy
const boxesContainer = document.querySelector(".boxes");

const generateBoxes = (amount) => {
  boxesContainer.innerHTML = "";
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const box = document.createElement("button");
    box.classList.add("box");
    box.type = "button";
    box.dataset.color = color;
    box.style.backgroundColor = color;
    box.textContent = i+1;
    boxes.push(box);
  }
  // console.log(boxes);
  boxesContainer.append(...boxes)
};

const resetBoxes = () => {
  boxesContainer.innerHTML = "";
  info.innerHTML = '';
}

generateBtn.addEventListener("click", function() {
  info.innerHTML = '';
  generateBoxes(slider.value)
});
resetBtn.addEventListener('click', resetBoxes);
const info = document.querySelector('.info');
const selectBox = event => {
if(event.target.nodeName !== "BUTTON") return;
const color = event.target.dataset.color;
// console.log(event.target);
const number = event.target.textContent;
info.innerHTML = `Został kliknięty prostokąt o numerze ${number}, mający kolor ${color}`;
}

boxesContainer.addEventListener('click', selectBox);