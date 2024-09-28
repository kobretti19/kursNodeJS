"use strict";

// const vezba1 = [1, 2, 3, 4, 5, 6];
// vezba1.push(7);
// console.log(vezba1);
// const primer2 = vezba1.slice(1, 3);
// console.log(primer2);

//Rabota so objekti

const studenti = [
  { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
  { ime: "Pero", prosek: 8.2, grad: "Bitola" },
  { ime: "Zlatko", prosek: 6.1, grad: "Kumanovo" },
  { ime: "Kiko", prosek: 4.6, grad: "Skopje" },
  { ime: "Simona", prosek: 9, grad: "Ohrid" },
  { ime: "Trajanka", prosek: 8.4, grad: "Prilep" },
  { ime: "Ivana", prosek: 2.7, grad: "Kichevo" },
  { ime: "Natasha", prosek: 6.3, grad: "Veles" },
  { ime: "Stanko", prosek: 10, grad: "Strumica" },
  { ime: "Trajanka", prosek: 8.4, grad: "Prilep" },
  { ime: "Ivana", prosek: 3.7, grad: "Strumica" },
  { ime: "Natasha", prosek: 6.3, grad: "Skopje" },
  { ime: "Natasha", prosek: 6.3, grad: "Veles" },
  { ime: "Biljana", prosek: 8.3, grad: "Strumica" },
  { ime: "Stanko", prosek: 10, grad: "Strumica" },
];

// console.log(...imeStudenti);
// 1. SIte studenti od Skopje cie ime zavrsuva na n i imaat prosek nad 7, podredeni po ime rastecki
//studenti.ime.endWith("i")
//2. Site studenti koi imaat prosek nad 9 i ne se od Skopje podredeni po prosek opagjacki

// 3. Prvite tri studenti koi imaat iminja od 5 karakteri podredeni po prosek
//4. Vkupen prosek na studenti koi se od Kumanovo
// 5. Da se dodade uste eden student so ime Goran so prosek 7.3 i grad Delcevo
//6 . Da se izbrise prviot student vo studenti
//7. Da se nagradat studentite od Skopje i Kumanovo za edna ocenka plus

//1./////////////////////////////////////////////////////////////////
console.log(`1. SIte studenti od Skopje cie ime zavrsuva na n i imaat prosek nad 7, podredeni po ime rastecki
`);
////////////////////////////////////////////////////////////////////
const findStudentSkopje = studenti
  .filter(
    (student) =>
      student.grad === "Skopje" &&
      student.ime.endsWith("n") &&
      student.prosek > 7
  )
  .sort((a, b) => a.prosek - b.prosek);
console.log(findStudentSkopje);

//2./////////////////////////////////////////////////////////////////
console.log(
  `2. Site studenti koi imaat prosek nad 9 i ne se od Skopje podredeni po prosek opagjacki`
);
////////////////////////////////////////////////////////////////////
const studentDrugiGradovi = studenti
  .filter((student) => student.prosek > 9 && student.grad !== "Skopje")
  .sort((a, b) => b.prosek - a.prosek);
console.log(studentDrugiGradovi);
// 3. //////////////////////////////////////////////////////////////////
console.log(
  `3. Prvite tri studenti koi imaat iminja od 5 karakteri podredeni po proseks`
);
//////////////////////////////////////////////////////////////////
const studentPetKarakteri = studenti
  .filter((student) => {
    if (student.ime.length === 5) {
      return student.ime;
    }
  })
  .sort((a, b) => a.prosek - b.prosek);

console.log(studentPetKarakteri);

//4.//////////////////////////////////////////////////////////////////
console.log(`4. Vkupen prosek na studenti koi se od Kumanovo`);
//////////////////////////////////////////////////////////////////
const studentiKumanovo = studenti.filter(
  (student) => student.grad === "Kumanovo"
);

const prosek =
  studentiKumanovo
    .map((student) => student.prosek)
    .reduce((acc, prosek) => acc + prosek, 0) / studentiKumanovo.length;
console.log(prosek);
//5.//////////////////////////////////////////////////////////////////
console.log(
  `5. Da se dodade uste eden student so ime Goran so prosek 7.3 i grad Delcevo`
);
//////////////////////////////////////////////////////////////////
studenti.push({
  ime: "Goran",
  prosek: 7.3,
  grad: "Delcevo",
});
console.log(studenti);
//7.//////////////////////////////////////////////////////////////////
console.log(
  `7.Da se nagradat studentite od Skopje i Kumanovo za edna ocenka plus`
);
//////////////////////////////////////////////////////////////////

const nagradeniStudenti = studenti.map((student) => {
  if (student.grad === "Skopje" || student.grad === "Kumanovo") {
    return ++student.prosek;
  }
});
console.log(studenti);

delete studenti[0];
console.log(studenti);
