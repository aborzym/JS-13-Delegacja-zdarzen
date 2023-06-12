"use strict";

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

const handleHighlight = (currentTarget, level) => {
  if (level !== 1) {
    setTimeout(() => {
      currentTarget.classList.toggle("event-bubbling");
    }, (level - 1) * 1000);
  } else {
    currentTarget.classList.toggle("event-bubbling");
  }

  setTimeout(() => {
    currentTarget.classList.remove("event-bubbling");
  }, level * 1000);
}

const handleBubbling = (e) => {
  // e.stopPropagation();
  // e.stopImmediatePropagation();
  console.log("target", e.target);
  const currentTarget = e.currentTarget;
  console.log("currentTarget", currentTarget);
  const currentTargetId = currentTarget.id;
  if (currentTargetId === "descendant") {
    handleHighlight(currentTarget, 1);
  } else if (currentTargetId === "child") {
    handleHighlight(currentTarget, 2);
  } else {
    handleHighlight(currentTarget, 3)
  }
};

parent.addEventListener("click", handleBubbling);
child.addEventListener("click", handleBubbling);
descendant.addEventListener("click", handleBubbling);
descendant.addEventListener("click", () => console.log("2 listener"));

// parent.addEventListener("click", handleBubbling, { capture: true });
// child.addEventListener("click", handleBubbling, { capture: true });
// descendant.addEventListener("click", handleBubbling, { capture: true });
