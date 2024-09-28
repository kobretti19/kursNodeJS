// const perimeter =
//? Za domasna da se dodade uste eden modul so ime domasna.js
//? koj kje ima funkcija da promeni farenhajt vo celzius i obratno
//? da ima funkcija sto presmetuva plostina i perimetar na triagolnik
//? da ima funckija sto presmetuva plostina i perimetar na pravoagolnik
//? da ima funkcija sto kje presmetuva dali nekoj broj e paren ili neparen
const f2c = (fh) => `${fh} °F e ${(fh - 32) * (5 / 9)} °C`;

const c2f = (c) => `${c} °C e ${c * (9 / 5) + 32} °F`;

let plostinaPrav;
let paraMetarPrav;

const plostinaParameterPravoagolnik = function (sirina, visina) {
  plostinaPrav = sirina * visina;
  paraMetarPrav = 2 * (sirina + visina);
  console.log(
    `Pravoagolnikot so sirina:${sirina} i visina:${visina} ima plostina=${plostinaPrav} i paraMetar=${paraMetarPrav}`
  );
  const rezultat = {
    plostina: plostinaPrav,
    parametar: paraMetarPrav,
  };
  return rezultat;
};

let plostina;
let paraMetarTriagolnik;

const plostinaParametarTriagolnik = function (side1, side2, side3) {
  paraMetarTriagolnik = side1 + side2 + side3;
  let s = (side1 + side2 + side3) / 2;
  plostina = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  console.log(
    `Triagolnikot so strani a:${side1} b:${side2} i c:${side3} ima plostina=${plostina} i parametar=${paraMetarTriagolnik}`
  );
  const rezultatTriagolnik = [paraMetarTriagolnik, plostina];
  return rezultatTriagolnik;
};

const parenNeparen = (number) =>
  number % 2 == 0 ? `Brojot ${number} e paren` : `Brojot ${number} e neparen`;
module.exports = {
  parenNeparen,
  plostinaParametarTriagolnik,
  plostinaParameterPravoagolnik,
  f2c,
  c2f,
};
