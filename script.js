// Создать элементы
const yesBtn = document.getElementById("yes_button");
const noBtn = document.getElementById("no_button");
const mainImage = document.querySelector(".main_kitten");
const options = document.querySelector(".options");
const afterYes = document.getElementById("after_yes_img");
const afterNo = document.getElementById("after_no_img");
const title = document.querySelector("h1");

//  для кнопки "И ты мне)"
yesBtn.addEventListener("click", function () {
  // Спрятать основную картинку и кнопки (можно ли обойти)
  mainImage.classList.add("hide");
  options.classList.add("hide");
  title.classList.add("hide");

  // Показать видео для "И ты мне)"
  afterYes.classList.add("show");

  // Автозапуск видео
  const yesVideo = afterYes.querySelector("video");
  yesVideo.play();
});

//  для кнопки "🤢"
noBtn.addEventListener("click", function () {
  // Спрятать основную картинку и кнопки
  mainImage.classList.add("hide");
  options.classList.add("hide");
  title.classList.add("hide");

  // Показать видео для "🤢"
  afterNo.classList.add("show");

  // Автозапуск видео хз зачем потом разберусь
  const noVideo = afterNo.querySelector("video");
  noVideo.play();
});
