const search_box = document.querySelector(".search_box");
const search_btn = search_box.querySelector(".button");
const search_input = search_box.querySelector(".search_input");
const nav_menu = document.querySelector(".menu");
const nav_btn = nav_menu.querySelector(".button");
const ul = nav_menu.querySelector("ul");
const logo = document.querySelector("img");
const doc = document.querySelector("html");
let opaque = 0;

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
    search_input.value = "";
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
// doc.addEventListener("click", (e) => {
//   console.log(e.target);
//   if (
//     e.target.parentNode.className !== "search_box" &&
//     e.target.parentNode.className !== "menu"
//   ) {
//     if (!search_input.classList.contains("hide")) {
//       search_hd();
//     } else if (opaque) {
//       opacity();
//     }
//   }
// });
