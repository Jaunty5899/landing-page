const search_box = document.querySelector(".search_box");
const search_btn = search_box.querySelector(".button");
const search_input = search_box.querySelector(".search_input");

search_btn.addEventListener("click", () => {
  search_box.classList.toggle("expand");
  let timeout = !search_input.classList.contains("hide")
    ? 0.25 * 1000 - 10
    : 10;
  setTimeout(() => {
    search_input.classList.toggle("hide");
  }, timeout);
});
