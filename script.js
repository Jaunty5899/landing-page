const search_box = document.querySelector(".search_box");
const search_btn = search_box.querySelector(".button");
const search_input = search_box.querySelector(".search_input");
const nav_menu = document.querySelector(".menu");
const nav_btn = nav_menu.querySelector(".button");
const ul = nav_menu.querySelector("ul");
const logo = document.querySelector("img");
let opaque;

const opacity = () => {
  opaque = opaque ? 0 : 1;
  ul.style.opacity = opaque;
};

const search_hd = () => {
  let timeout, img_src, len;
  search_box.classList.toggle("expand");
  if (!search_input.classList.contains("hide")) {
    timeout = 0.2 * 1000 - 10;
    img_src = "search";
    len = 130;
  } else {
    timeout = 10;
    img_src = "cross";
    len = 80;
  }
  logo.style.width = `${len}px`;
  setTimeout(() => {
    search_btn.style.background = `center / 35% no-repeat url(${img_src}.svg)`;
    search_input.classList.toggle("hide");
  }, timeout);
};

nav_btn.addEventListener("click", () => {
  opacity();
  if (!search_input.classList.contains("hide")) {
    search_hd();
  }
});
search_btn.addEventListener("click", () => {
  search_hd();
  if (opaque) {
    opacity();
  }
});
