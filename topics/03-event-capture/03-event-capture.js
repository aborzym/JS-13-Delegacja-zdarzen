'use strict';

for (let elem of document.querySelectorAll('.elem')) {
  elem.addEventListener('click', e => alert(`Capturing: ${elem.tagName}`),
    { capture: true });
  elem.addEventListener('click', e => alert(`Bubbling: ${elem.tagName}`));
}

const elem = document.querySelector("#descendant");

// const log = () => console.log("Kliknięte");
// elem.addEventListener("click", log);
//
// elem.removeEventListener("click", log);
