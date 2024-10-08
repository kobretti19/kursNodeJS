const fs = require('fs');

const dataMovies = JSON.parse(
  fs.readFileSync(`${__dirname}/data/movies.json`).toString()
);
console.log(dataMovies);
const id = dataMovies.map((el) => el.id);
console.log(id);

const dataFilmovi = {
  filmovi: [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      year: 1994,
      genre: ['Drama'],
      rating: 9.3,
      actors: ['Tim Robbins', 'Morgan Freeman'],
      poster:
        'https://m.media-amazon.com/images/I/61-vQDr7ecL._AC_UF894,1000_QL80_.jpg',
      runtime: 142,
      country: 'USA',
      boxOffice: '$28.3 million',
      website: 'http://www.warnerbros.com/movies/shawshank-redemption',
    },
    {
      id: 2,
      title: 'The Godfather',
      year: 1972,
      genre: ['Crime', 'Drama'],
      rating: 9.2,
      actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
      poster:
        'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/the-godfather-poster.jpeg',
      language: 'English',
      boxOffice: '$245.1 million',

      website: 'https://www.paramountmovies.com/movies/the-godfather',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      year: 2008,
      genre: ['Action', 'Crime', 'Drama'],
      rating: 9,
      actors: ['Christian Bale', 'Heath Ledger', 'Gary Oldman'],
      poster:
        'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg',
      boxOffice: '$1.005 billion',
      website: 'https://www.warnerbros.com/movies/dark-knight',
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      rating: 9,
      year: 1994,
      genre: ['Crime', 'Drama'],
      actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
      poster:
        'https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      trailer: 'https://example.com/pulp_fiction_trailer.mp4',
      boxOffice: '$213.9 million',
      website: 'https://www.miramax.com/movie/pulp-fiction',
    },
    {
      id: 5,
      title: 'Forrest Gump',
      rating: 8.5,
      year: 1994,
      genre: ['Drama', 'Romance'],
      actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
      poster:
        'https://m.media-amazon.com/images/I/61d1QoVA2nL._AC_UF894,1000_QL80_.jpg',
      trailer: 'https://example.com/forrest_gump_trailer.mp4',
      boxOffice: '$677.9 million',
      website: 'https://www.paramountmovies.com/movies/forrest-gump',
    },
    {
      id: 6,
      title: 'Inception',
      rating: 9.3,
      year: 2010,
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg',
      trailer: 'https://example.com/inception_trailer.mp4',
      boxOffice: '$829.9 million',
      website: 'https://www.warnerbros.com/movies/inception',
    },
    {
      id: 7,
      title: 'The Matrix',
      rating: 7.9,
      year: 1999,
      genre: ['Action', 'Sci-Fi'],
      actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
      poster:
        'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg',
      boxOffice: '$463.5 million',
      website: 'https://www.warnerbros.com/movies/matrix',
    },
    {
      id: 8,
      title: 'The Lord of the Rings: The Return of the King',
      rating: 8.5,
      year: 2003,
      genre: ['Adventure', 'Drama', 'Fantasy'],
      actors: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
      plot: 'Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.',
      poster:
        'https://musicart.xboxlive.com/7/8d8d5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      trailer: 'https://example.com/lotr_return_of_the_king_trailer.mp4',
      boxOffice: '$1.142 billion',
      website: 'https://www.lordoftherings.net/film/the-return-of-the-king',
    },
    {
      id: 9,
      title: 'The Dark Knight Rises',
      rating: 9.1,
      year: 2012,
      genre: ['Action', 'Thriller'],
      actors: ['Christian Bale', 'Tom Hardy'],
      poster:
        'https://musicart.xboxlive.com/7/583d1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      trailer: 'https://example.com/the_dark_knight_rises_trailer.mp4',
      boxOffice: '$1.081 billion',
      website: 'http://www.warnerbros.com/movies/the-dark-knight-rises',
    },
    {
      id: 10,
      title: 'Interstellar',
      rating: 7.8,
      year: 2014,
      genre: ['Adventure', 'Drama', 'Sci-Fi'],
      actors: ['Matthew McConaughey', 'Anne Hathaway'],
      poster:
        'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg',
      boxOffice: '$677.5 million',
      website: 'http://www.paramount.com/movies/interstellar',
    },
  ],
};

exports.getView = (req, res) => {
  res.render('akteri', dataFilmovi);
};
exports.getMovies = (req, res) => {
  res.render('filmovi', dataFilmovi);
};
// module.exports = dataFilmovi;
