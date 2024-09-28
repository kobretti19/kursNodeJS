const readWrite = require("./readWrite");

const dodavanjeStudent = async (newID, novoIme, dodGrad, dodProsek) => {
  try {
    const dataString = await readWrite.fileRead("studenti.json");
    const studenti = JSON.parse(dataString);
    const novStudent = {
      id: newID,
      ime: novoIme,
      grad: dodGrad,
      prosek: dodProsek,
    };
    studenti.push(novStudent);
    console.log(
      `Dodadovte nov student so id: ${newID}, ime: ${novoIme}, grad:${dodGrad}, prosek ${dodProsek}`
    );
    await readWrite.fileWrite("studentiNew.json", JSON.stringify(studenti));
  } catch (err) {
    console.log(err);
  }
};
// dodavanjeStudent(9, "Vesna", "Struga", 6.5);

const smenaIme = async (ime, promenetoIme) => {
  try {
    const dataString = await readWrite.fileRead("studenti.json");
    const studenti = JSON.parse(dataString);
    studenti
      .filter((student) => student.ime === ime)
      .map((student) => (student.ime = promenetoIme));
    await readWrite.fileWrite("studentiUpdated.json", JSON.stringify(studenti));
    console.log(
      `Uspesno go promenivte imeto na studentot ${ime},novoto ime na studentot e: ${promenetoIme}`
    );
  } catch (err) {
    console.log(err);
  }
};
// smenaIme("Blazo", "Risto");

const studentRemove = async (id) => {
  try {
    const dataString = await readWrite.fileRead("studenti.json");
    const studenti = JSON.parse(dataString);
    const newList = studenti.filter((student) => student.id != id);

    await readWrite.fileWrite("studentiRemoved.json", JSON.stringify(newList));
    console.log(`Uspesno e izbrisan studentot so id: ${id}`);
  } catch (err) {
    console.log(err);
  }
};
studentRemove(558);
