const search_box = document.querySelector(".search_box");
const search_mini = search_box.querySelector(".search_mini");
const search_input = search_box.querySelector(".search_input");

search_mini.addEventListener("click", () => {
  search_box.classList.toggle("expand");
  let timeout = !search_input.classList.contains("hide") ? 990 : 10;
  setTimeout(() => {
    search_input.classList.toggle("hide");
  }, timeout);
});
