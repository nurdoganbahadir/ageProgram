const reset = document.getElementById("reset");
const play = document.getElementById("play");
const control = document.getElementById("control");
const age = document.getElementById("age");

let yas = prompt("Lütfen yaşınızı giriniz?: ");
let resit = "REŞİTSİNİZ";
let resitDegil = "REŞİT DEĞİLSİNİZ";

count = "0";
reset.onclick = function () {
  age.textContent = count;
};
/* play.onclick= function{

} */
if (yas >= 18) {
  control.textContent = resit;
} else {
  control.textContent = resitDegil;
}
