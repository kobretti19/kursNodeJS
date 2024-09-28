const {
  parenNeparen,
  plostinaParametarTriagolnik,
  plostinaParameterPravoagolnik,
  f2c,
  c2f,
} = require("./funkcii");

// console.log(parenNeparen(55));
// console.log(f2c(100));
// console.log(c2f(10));
// console.log(plostinaParametarTriagolnik(3, 4, 5));
// console.log(plostinaParameterPravoagolnik(3, 5));
const zadaca1 = parenNeparen(123);
const zadaca2 = parenNeparen(62);
console.log(zadaca1);
console.log(zadaca2);
const zadaca3 = f2c(110);
const zadaca4 = c2f(15);
console.log(zadaca3);
console.log(zadaca4);
const zadaca5 = plostinaParameterPravoagolnik(10, 15);
console.log(zadaca5);
const zadaca6 = plostinaParametarTriagolnik(3, 4, 5);
console.log(zadaca6);

// const [parametar, plostina] = zadaca6;
// console.log(parametar, plostina);
const recenica = "Vezbanje na zadaci";
const recenicaArr = recenica.split(" ");
console.log(recenicaArr);
const [zbor1, zbor2, zbor3] = recenicaArr;
console.log(zbor1, zbor2, zbor3);
const { plostina: plostina1, parametar: parametar1 } = zadaca5;
console.log(plostina1, parametar1);
