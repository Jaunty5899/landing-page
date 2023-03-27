const search_box = document.querySelector(".search_box");
const search_mini = search_box.querySelector(".search_mini");
const search_input = search_box.querySelector(".search_input");

search_mini.addEventListener("click", () => {
  search_box.classList.toggle("expand");
  search_input.classList.toggle("visible");
});
