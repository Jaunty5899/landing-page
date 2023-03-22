const search_box = document.querySelector(".search_box");
const search_mini = search_box.querySelector("#search_mini");
const search_input = search_box.querySelector("#search_input");

search_mini.addEventListener("click", () => {
  if (search_input.style.display == "none") {
    search_input.style.display = "block";
    search_box.classList.add("expand");
  } else {
    search_input.style.display = "none";
    search_box.classList.remove("expand");
  }
});
