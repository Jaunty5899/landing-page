const search_box = document.querySelector(".search_box");
const search_btn = search_box.querySelector(".button");
const search_input = search_box.querySelector(".search_input");
const nav_menu = document.querySelector(".menu");
const nav_btn = nav_menu.querySelector(".button");
const ul = nav_menu.querySelector("ul");
const logo = document.querySelector("img");
const login_btn_menu = ul.querySelector("#login");
const login_div = document.querySelector(".login");
const backdrop = document.querySelector(".backdrop");
let opaque = 0;

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const showBackdrop = () => {
  backdrop.style.display = "block";
};

const hideBackdrop = () => {
  backdrop.style.display = "none";
};

const isLoginVisible = () => {
  return login_div.classList.contains("show");
};

const isSearchExpanded = () => {
  return search_box.classList.contains("expand");
};

const login_tog = async () => {
  login_div.classList.toggle("show");
  if (isLoginVisible()) {
    await sleep(500);
    login_div.style.zIndex = 100;
  } else {
    login_div.style.zIndex = -1;
  }
};

const opacity = () => {
  opaque = opaque ? 0 : 1;
  const pointEvenVal = opaque == 1 ? "auto" : "none";
  ul.style.pointerEvents = pointEvenVal;
  ul.style.opacity = opaque;
  opaque && showBackdrop();
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
  showBackdrop();
  opacity();
  login_tog();
});

nav_btn.addEventListener("click", () => {
  showBackdrop();
  if (!search_input.classList.contains("hide")) {
    search_tog();
    hideBackdrop();
  }
  if (isLoginVisible()) {
    login_tog();
    hideBackdrop();
  }
  opacity();
});

search_btn.addEventListener("click", () => {
  if (opaque) {
    opacity();
    hideBackdrop();
  }
  if (isLoginVisible()) {
    login_tog();
    hideBackdrop();
  }
  !isSearchExpanded() ? showBackdrop() : hideBackdrop();
  search_tog();
});

backdrop.addEventListener("click", () => {
  opaque && opacity();
  isLoginVisible() && login_tog();
  isSearchExpanded() && search_tog();
  hideBackdrop();
});
