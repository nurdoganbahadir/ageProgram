const reset = document.getElementById("reset");
const play = document.getElementById("play");
const control = document.getElementById("control");
const age = document.getElementById("age");

let yas = prompt("Lütfen yaşınızı giriniz? ");
let resit = "REŞİTSİNİZ";
let resitDegil = "REŞİT DEĞİLSİNİZ";

count = "0";
zero = " ";

reset.onclick = function () {
  age.textContent = count;
  control.textContent = zero;
};
play.onclick = function () {
  location.reload();
};
if (yas >= 18) {
  age.textContent = yas;
  control.textContent = resit;
} else {
  age.textContent = yas;
  control.textContent = resitDegil;
}
