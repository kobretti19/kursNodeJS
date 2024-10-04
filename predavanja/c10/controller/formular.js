const data = {
  ime: "Pero",
  prezime: "Perovski",
  niza: ["Skopje", "Veles", "Kavadarci", "Veleshta", "Livadista", "Pelister"],
  studenti: [
    {
      ime: "Pero",
      prezime: "Perovski",
      prosek: 9.5,
    },
    {
      ime: "Janko",
      prezime: "Jankovski",
      prosek: 8.5,
    },
    {
      ime: "Stanko",
      prezime: "Stankovski",
      prosek: 7.5,
    },
    {
      ime: "Ivan",
      prezime: "Stankovski",
      prosek: 10,
    },
    {
      ime: "Klementina",
      prezime: "Stankovski",
      prosek: 9.5,
    },
  ],
};

exports.getView = (req, res) => {
  res.render("index", data);
};

exports.postForm = (req, res) => {
  const newStudent = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };
  data.studenti.push(newStudent);
  res.render("index", data);
};

//Zadaca za ovoj Chas
// Da se kreira tri stranici ili
//ruta/homepage - kade sto kje homepage za holywood
//ruta akteri - kade sto kje se prikaze lista na akteri
// ruta filmovi - kade  sto ke se prikaze lista od filmovi
// site ovie da se konektirani megju sebe
// homepage da ime navigacija za akteri i filmovi
// akteri da ima navigacija za homeüage i filmovi
//filmovi da ima navigacija za akteri i homepage
