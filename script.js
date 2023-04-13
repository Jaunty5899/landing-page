const search_box = document.querySelector(".search_box");
const search_btn = search_box.querySelector(".button");
const search_input = search_box.querySelector(".search_input");
const nav_menu = document.querySelector(".menu");
const nav_btn = nav_menu.querySelector(".button");
const ul = nav_menu.querySelector("ul");
const logo = document.querySelector("img");
const login_btn_menu = ul.querySelector("#login");
const login_div = document.querySelector(".login");
const signup_btn = document.querySelector(".signup");
const signup_div = document.querySelector(".section");
let opaque = 0;

const isLoginVisible = () => {
  return login_div.classList.contains("show");
};

const isSearchExpanded = () => {
  return search_box.classList.contains("expand");
};

const login_tog = () => {
  login_div.classList.toggle("show");
};

const signup_tog = () => {
  signup_div.classList.toggle("show");
};

const opacity = () => {
  opaque = opaque ? 0 : 1;
  const pointEvenVal = opaque == 1 ? "auto" : "none";
  ul.style.pointerEvents = pointEvenVal;
  ul.style.opacity = opaque;
};

const search_tog = () => {
  let img_src, len;
  search_box.classList.toggle("expand");
  if (!search_input.classList.contains("hide")) {
    img_src = "search";
    len = 130;
  } else {
    img_src = "cross";
    len = 100;
    search_input.value = "";
  }
  logo.style.width = `${len}px`;
  search_btn.style.background = `center / 35% no-repeat url(${img_src}.svg)`;
  search_input.classList.toggle("hide");
};

login_btn_menu.addEventListener("click", () => {
  opacity();
  login_tog();
  console.log("btn on");
});

nav_btn.addEventListener("click", () => {
  if (!search_input.classList.contains("hide")) {
    search_tog();
  }
  if (isLoginVisible()) {
    login_tog();
  }
  if (signup_div.classList.contains("show")) {
    signup_tog();
  }
  opacity();
});

search_btn.addEventListener("click", () => {
  if (opaque) {
    opacity();
  }
  if (isLoginVisible()) {
    login_tog();
  }
  if (signup_div.classList.contains("show")) {
    signup_tog();
  }
  search_tog();
});

signup_btn.addEventListener("click", () => {
  signup_tog();
  if (isLoginVisible()) {
    login_tog();
  }
});

document.addEventListener("click", (e) => {
  if (
    e.target.closest(".tools") ||
    e.target.closest(".section") ||
    e.target.closest(".login")
  )
    return;
  if (!search_input.classList.contains("hide")) {
    search_tog();
  }
  if (opaque) {
    opacity();
  }
  if (isLoginVisible()) {
    login_tog();
  }
  if (signup_div.classList.contains("show")) {
    signup_tog();
  }
});
