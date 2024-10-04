const data = {
  akteri: [
    {
      ime: "Pero",
      prezime: "Perovski",
      rating: 8.0,
    },
    {
      ime: "Janko",
      prezime: "Jankovski",
      rating: 8.0,
    },
    {
      ime: "Stanko",
      prezime: "Stankovski",
      rating: 8.0,
    },
    {
      ime: "Ivan",
      prezime: "Kalamdziev",
      rating: 8.0,
    },
    {
      ime: "Klementina",
      prezime: "Stankovski",
      rating: 8.0,
    },
  ],
};
const dataFilmovi = {
  filmovi: [
    {
      ime: "Ocean",
      zanr: "Action",
    },
    {
      ime: "BAD BOYS",
      zanr: "ACTION/TRILLER",
    },
    {
      ime: "ICE-AGE",
      zanr: "COMEDY",
    },
    {
      ime: "SUPERMAN",
      zanr: "ACTION",
    },
    {
      ime: "SPIDERMAN",
      zanr: "ACTION/TRILLER",
    },
  ],
};

exports.getView = (req, res) => {
  res.render("akteri", data);
};
exports.getMovies = (req, res) => {
  res.render("filmovi", dataFilmovi);
};
