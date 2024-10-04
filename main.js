let images = document.querySelector(".images");
let previousBtn = document.querySelector(".previousBtn");
let nextBtn = document.querySelector(".nextBtn");
let stopBtn = document.querySelector(".stopBtn");
let startBtn = document.querySelector(".startBtn");

let imgArr = [
  "./images/img1.jpg",
  "./images/img2.jpg",
  "./images/img3.avif",
  "./images/img4.png",
  "./images/img5.jpg",
];

let num = 0;
let interval;
startBtn.addEventListener("click", function () {
  interval = setInterval(() => {
    num++;
    images.src = imgArr[num];
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});

nextBtn.addEventListener("click", function () {
  clearInterval(interval);
  num++;
  images.src = imgArr[num];
});

previousBtn.addEventListener("click", function () {
  num--;
  images.src = imgArr[num];
});

