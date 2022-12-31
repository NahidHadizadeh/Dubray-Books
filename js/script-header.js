const headerElem = document.querySelector("#header");
const myAccontMenu = document.querySelector(".myAccontMenu");
const hMenu = document.querySelector(".h-menu");
const basket = document.querySelector(".basket");
const myAccountBox = document.querySelector(".myAccount-box");
const myAccountBtn = document.querySelector(".myAccount");
const myAccountSpan = document.querySelector("#myAccount");
const drapdownIcon = document.querySelector(".drapdown-icon");
const cartBtnHeader = document.querySelector(".button-img");
const nextDiv = document.querySelector(".next");
const layoutCart = document.querySelector(".layout-cart");
const cartContainer = document.querySelector(".cart-container");
const BlockLayoutCart = document.querySelector(".block-layout-card");
const ulMenuNavItem = document.querySelectorAll(".ul-menu-nav-item");
const ulMenuNavLink = document.querySelector(".ul-menu-nav-link");
const hambergeri = document.querySelector(".hambergeri");
const sideBar = document.querySelector(".side-bar");
const closeSideBarIcon = document.querySelector(".a-close");
const accountSideBar = document.querySelector(".account-side-bar");
const sideBarAccountDrapdownIcon = document.querySelector(
  "#side-bar-account-drapdown-icon"
);
const sidAccountMenu = document.querySelector(".side-account-menu");
const sideMenuItemHeaders = document.querySelectorAll(".side-menu-item-header");
const drapdownIconSide = document.querySelectorAll(".drapdown-icon-side");
const headerPadding = document.querySelector(".header-padding");
const bookMenuItem = document.querySelector(".book-menu-item");

// ============================= cart contact show
cartBtnHeader.addEventListener("click", () => {
  cartContainer.style.transform = "translateX(0)"; // halate animationi baz mishe
  cartContainer.style.right = "17px"; //hidden cart container ---- 17px baraye dide shodane scrollbare layout cart l
  layoutCart.style.right = "0"; //hidden layout cart container

  // ====== hazf scrollbare body va taqiire padding baraye jabeja nashodane elementha
  document.body.style.overflow = "hidden"; // hazfe scroll body
  document.body.style.paddingRight = "17px";
  headerElem.style.paddingRight = "17px";
  // ====== 
});
// =============================  close cart contact
layoutCart.addEventListener("click", (event) => {
  if (
    event.target.className.includes("layout-cart") ||
    event.target.className.includes("close") ||
    event.target.parentElement.className.includes("button-img")
  ) {
    // ====== ezafe kardan scrollbare body va padding baraye bargashtane elementha be makan aslie khod
    document.body.style.overflow = "scroll"; // bargardandane scrollbar body
    document.body.style.paddingRight = "0";
    headerElem.style.paddingRight = "0";
    // ======
    
    cartContainer.style.transform = "translateX(110%)"; // halate animationi
    layoutCart.style.animation = "fadeInAnimationForHidden ease .4s";
    setTimeout(() => {
      layoutCart.style.right = "-100%"; //hidden layout cart container
    }, 300); //halate animationi va ba takhir anjam beshe
  }
});
// ============================= side bar ->header side bar ->account jahate icon drapdown
accountSideBar.addEventListener("click", () => {
  drapdown(sideBarAccountDrapdownIcon);
});
// ============================== sidebar-> show and hidden contacts menus
sideMenuItemHeaders.forEach((sideMenuItemHeader) => {
  sideMenuItemHeader.addEventListener("click", () => {
    let drapdownIcon = sideMenuItemHeader.lastElementChild;
    drapdown(drapdownIcon);
  });
});
// function for drapdown icon and show and hiden menu contact
function drapdown(drapdownIcon) {
  let contactElememnt = drapdownIcon.parentElement.nextElementSibling;
  if (drapdownIcon.classList.value.includes("rotate")) {
    drapdownIcon.classList.remove("rotate");
    contactElememnt.style.display = "none";
  } else {
    drapdownIcon.classList.add("rotate");
    if (drapdownIcon === sideBarAccountDrapdownIcon) {
      contactElememnt.style.display = "flex";
    } else {
      contactElememnt.style.display = "block";
    }
  }
}
// ================================my account hover and show & hiden menu====================
myAccountBox.addEventListener("mouseenter", () => {
  hMenu.style.display = "block";
});
myAccountBox.addEventListener("mouseleave", () => {
  hMenu.style.display = "none";
});
// =======================================
// ================================ scroll window and resize book menu
window.addEventListener("resize", () => {
  bookMenuItem.style.height = window.innerHeight - 150 + "px";
});
window.addEventListener("load", () => {
  bookMenuItem.style.height = window.innerHeight - 150 + "px";
});
// ========================================
// ======================================== show sidebar
hambergeri.addEventListener("click", () => {
  sideBar.style.left = "0";
  document.body.style.overflow = "hidden"; // hazfe scroll body
});
// ============================= close sidebar
closeSideBarIcon.addEventListener("click", () => {
  sideBar.style.left = "-100%";
  document.body.style.overflow = "scroll"; // bargardandane scrollbar body
});
