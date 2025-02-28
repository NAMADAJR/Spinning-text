let isFirefox = typeof InstallTrigger !== "undefined";
const words = "Namada Junior ♠️♥️♣️♦️";

let ANGLE = 360;
const ANIMATION_DURATION = 4000;

const animation = () => {
  ANGLE -= 1;
  document.querySelectorAll(".spiral *").forEach((el, i) => {
    const translateY = Math.sin(ANGLE * (Math.PI / 120)) * 100;
    const scale = Math.cos(ANGLE * (Math.PI / 120)) * 0.5 + 0.5;

    const offset = parseInt(el.dataset.offset);
    const delay = i * (ANIMATION_DURATION / 16) - offset;

    setTimeout(() => {
      el.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }, delay);
  });

  requestAnimationFrame(animation);
};

const characters = words.split("").forEach((char, i) => {
  const createElement = (offset) => {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.setAttribute("data-offset", offset);
    div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;
    return div;
  };

  document.querySelector("#spiral").append(createElement(0));
  document
    .querySelector("#spiral2")
    .append(createElement((isFirefox ? 1 : -1) * (ANIMATION_DURATION / 2)));
});

if (isFirefox) {
  animation();
}
