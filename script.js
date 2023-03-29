const search_box = document.querySelector(".search_box");
const search_btn = search_box.querySelector(".button");
const search_input = search_box.querySelector(".search_input");
const search_img = search_box.querySelector("img");

search_btn.addEventListener("click", () => {
  let timeout;
  search_box.classList.toggle("expand");
  if (!search_input.classList.contains("hide")) {
    timeout = 0.2 * 1000 - 10;
    search_img.src = "search.svg";
  } else {
    timeout = 10;
    search_img.src = "cross.svg";
  }
  setTimeout(() => {
    search_input.classList.toggle("hide");
  }, timeout);
});
