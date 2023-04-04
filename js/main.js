var root = document.querySelector(":root");
////////////////////////// start  color of BackGround //////////////////////////////
let background1 = document.querySelector(".bg-1");
let background2 = document.querySelector(".bg-2");
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;
function changeBackGround() {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
}
background1.addEventListener("click", () => {
  darkColorLightness = "17%";
  whiteColorLightness = "100%";
  lightColorLightness = "95%";
  background1.classList.add("active");
  background2.classList.remove("active");
  changeBackGround();
});
background2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";
  background2.classList.add("active");
  background1.classList.remove("active");
  changeBackGround();
});
////////////////////////// end  color of BackGround //////////////////////////////
