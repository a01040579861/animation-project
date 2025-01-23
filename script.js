/* button click Event */
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let items = document.querySelectorAll(".item");

next.addEventListener("click", () => {
  items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", () => {
  items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});
