const search_box = document.querySelector(".search_box");
const search_btn = search_box.querySelector(".button");
const search_input = search_box.querySelector(".search_input");
const nav_menu = document.querySelector(".menu");
const nav_btn = nav_menu.querySelector(".button");
const ul = nav_menu.querySelector("ul");
const logo = document.querySelector("img");
const login_btn_menu = ul.querySelector("#login");
const login_div = nav_menu.querySelector(".login");
const backdrop = document.querySelector(".backdrop");
let opaque = 0;

const show_backdrop = () => {
  backdrop.classList.remove("hide");
};

const login_tog = () => {
  login_div.classList.toggle("top");
};

const opacity = () => {
  opaque = opaque ? 0 : 1;
  const pointEvenVal = opaque == 1 ? "auto" : "none";
  ul.style.pointerEvents = pointEvenVal;
  ul.style.opacity = opaque;
};

const search_tog = () => {
  let timeout, img_src, len;
  search_box.classList.toggle("expand");
  if (!search_input.classList.contains("hide")) {
    timeout = 0.2 * 1000 - 10;
    img_src = "search";
    len = 130;
  } else {
    timeout = 10;
    img_src = "cross";
    len = 100;
    search_input.value = "";
  }
  logo.style.width = `${len}px`;
  setTimeout(() => {
    search_btn.style.background = `center / 35% no-repeat url(${img_src}.svg)`;
    search_input.classList.toggle("hide");
  }, timeout);
};

login_btn_menu.addEventListener("click", () => {
  show_backdrop();
  opacity();
  login_tog();
});

nav_btn.addEventListener("click", () => {
  show_backdrop();
  opacity();
  if (!search_input.classList.contains("hide")) {
    search_tog();
  }
  if (login_div.classList.contains("top")) {
    login_tog();
  }
});

search_btn.addEventListener("click", () => {
  show_backdrop();
  search_tog();
  if (opaque) {
    opacity();
  }
  if (login_div.classList.contains("top")) {
    login_tog();
  }
});
backdrop.addEventListener("click", () => {
  if (opaque) {
    opacity();
  }
  if (login_div.classList.contains("top")) {
    login_tog();
  }
  if (!search_input.classList.contains("hide")) {
    search_tog();
  }
});
