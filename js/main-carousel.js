const $ = document;
const imageSlider = $.querySelector(".slider-img");
const nextBtn = $.querySelector(".next-icon");
const prevBtn = $.querySelector(".prev-icon");
const carouselIndicators = $.querySelector(".carousel-indicators");

let index = 0;
const srcImage = [
  "./images/slider 1/11.webp",
  "https://images.ctfassets.net/7iq7c2o7xfbl/66dyuNEwZKqGqHlf12MRvp/d17a17f3a64c0e4ac92a8edcd914e65f/Christmas_Catalogue_Banner_1918_x_585_3.webp",
  // "https://images.ctfassets.net/7iq7c2o7xfbl/5xd42gSiczENpyFmsAp4Cx/1d72db52df4b2ca2ec1d3150efa76f4f/ibas_books_of_the_year__1_.webp",
  "./images/slider 1/Christmas_Catalogue_Banner_1918_x_585_3.webp",
  "./images/slider 1/1.webp",
  "./images/slider 1/Graham_Norton_Web_Banner_1918_x_585__1_.webp",
];
// ==================
// به تعداد عکسهای اسلایدر در پایین عکس دایره میگذارد
function createIndicator() {
  for (let i = 0; i < srcImage.length; i++) {
    carouselIndicators.insertAdjacentHTML(
      "beforeend",
      `<span class="indicator cur-pointer" id= "slid${i}" onclick ="showImageInSliderWithIndicator(this)"></span>`
    );
  }
  document.querySelector("#slid0").style.backgroundColor =
    "rgba(16, 101, 247, 0.769)";
}
createIndicator();
// ===========
// نمایش عکس های اسلایدر با کلیک روی دایره های پایین اسلایدر
function showImageInSliderWithIndicator(spanInfo) {
  // ایندکس عکس مورد نظر که بخشی از آی دی است را به عدد تبدیل میکند
  index = Number(spanInfo.id.substring(4));
  imageSlider.src = srcImage[index];
  setColorIndicator(index);
  setColorForNextOrPrevIcon(index)
}
// ===========
function prevItem() {
  index--;
  setColorForNextOrPrevIcon(index);
  if (index < 0) {
    document.querySelector(".slider-item a").href = "https://google.com";
  } else {
    document.querySelector(".slider-item a").href = "#";
    imageSlider.src = srcImage[index];
    setColorIndicator(index);
  }
}

function nextItem() {
  index++;
  setColorForNextOrPrevIcon(index);
  if (index >= srcImage.length) {
    document.querySelector(".slider-item a").href = "https://google.com";
  } else {
    imageSlider.src = srcImage[index];
    setColorIndicator(index);
    document.querySelector(".slider-item a").href = "#";
  }
}

prevBtn.addEventListener("click", prevItem);
nextBtn.addEventListener("click", nextItem);
// ====================
// ست کردن رنگ مناسب برای دایره های زیر عکسهای اسلایدر
function setColorIndicator(index) {
  document.querySelectorAll(".indicator").forEach((spanElem) => {
    if (spanElem.id == "slid" + index) {
      spanElem.style.backgroundColor = "rgba(16, 101, 247, 0.769)";
    } else {
      spanElem.style.backgroundColor = "#f1f1f1";
    }
  });
}
// =============
// set opacity for next or prev icon
function setColorForNextOrPrevIcon(index) {
  console.log("index", index);
  if (index === 0) {
    document.querySelector(".prev-icon").style.opacity = ".35";
    document.querySelector(".next-icon").style.opacity = "1";
  } else if (index === srcImage.length - 1) {
    document.querySelector(".next-icon").style.opacity = ".35";
    document.querySelector(".prev-icon").style.opacity = "1";
  } else {
    document.querySelector(".next-icon").style.opacity = "1";
    document.querySelector(".prev-icon").style.opacity = "1";
  }
}
