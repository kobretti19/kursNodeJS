const fs = require('fs');
const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('File cannot be writed');
      resolve(data);
    });
  });
};
data = {
  filmovi: [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      year: 1994,
      genre: ['Drama'],
      rating: 9.3,
      director: 'Frank Darabont',
      actors: 'Tim Robbins',
      actimg:
        'https://cdn.britannica.com/32/198332-050-7D26EAB8/Tim-Robbins-2014.jpg',
      plot: 'Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.',
      poster:
        'https://m.media-amazon.com/images/I/61-vQDr7ecL._AC_UF894,1000_QL80_.jpg',
      trailer: 'https://example.com/shawshank_redemption_trailer.mp4',
      runtime: 142,
      awards: 'Nominated for 7 Oscars',
      country: 'USA',
      language: 'English',
      boxOffice: '$28.3 million',
      production: 'Columbia Pictures',
      website: 'http://www.warnerbros.com/movies/shawshank-redemption',
    },
    {
      id: 2,
      title: 'The Godfather',
      year: 1972,
      genre: ['Crime', 'Drama'],
      rating: 9.2,
      director: 'Francis Ford Coppola',
      actors: 'Marlon Brando',
      actimg:
        'https://upload.wikimedia.org/wikipedia/commons/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png',
      plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      poster:
        'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/the-godfather-poster.jpeg',
      trailer: 'https://example.com/the_godfather_trailer.mp4',
      runtime: 175,
      awards: 'Won 3 Oscars',
      country: 'USA',
      language: 'English',
      boxOffice: '$245.1 million',
      production: 'Paramount Pictures',
      website: 'https://www.paramountmovies.com/movies/the-godfather',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      year: 2008,
      genre: ['Action', 'Crime', 'Drama'],
      rating: 9,
      director: 'Christopher Nolan',
      actors: 'Christian Bale',
      actimg:
        'https://hips.hearstapps.com/hmg-prod/images/christian-bale-arrives-at-the-pale-blue-eye-los-angeles-news-photo-1706895210.jpg',
      plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      poster:
        'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg',
      trailer: 'https://example.com/the_dark_knight_trailer.mp4',
      runtime: 152,
      awards: 'Won 2 Oscars',
      country: 'USA',
      language: 'English',
      boxOffice: '$1.005 billion',
      production: 'Warner Bros. Pictures',
      website: 'https://www.warnerbros.com/movies/dark-knight',
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      year: 1994,
      genre: ['Crime', 'Drama'],
      rating: 8.9,
      director: 'Quentin Tarantino',
      actors: 'John Travolta',
      actimg:
        'https://m.media-amazon.com/images/M/MV5BNWUyNDZiMjItMjQzMy00YmQyLTliOTYtOGRkYzNhZTk5NDBiXkEyXkFqcGc@._V1_.jpg',
      plot: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      poster:
        'https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      trailer: 'https://example.com/pulp_fiction_trailer.mp4',
      runtime: 154,
      awards: 'Won 1 Oscar',
      country: 'USA',
      language: 'English',
      boxOffice: '$213.9 million',
      production: 'Miramax Films',
      website: 'https://www.miramax.com/movie/pulp-fiction',
    },
    {
      id: 5,
      title: 'Forrest Gump',
      year: 1994,
      genre: ['Drama', 'Romance'],
      rating: 8.8,
      director: 'Robert Zemeckis',
      actors: 'Tom Hanks',
      actimg:
        'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg',
      plot: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.',
      poster:
        'https://m.media-amazon.com/images/I/61d1QoVA2nL._AC_UF894,1000_QL80_.jpg',
      trailer: 'https://example.com/forrest_gump_trailer.mp4',
      runtime: 142,
      awards: 'Won 6 Oscars',
      country: 'USA',
      language: 'English',
      boxOffice: '$677.9 million',
      production: 'Paramount Pictures',
      website: 'https://www.paramountmovies.com/movies/forrest-gump',
    },
    {
      id: 6,
      title: 'Inception',
      year: 2010,
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      rating: 8.8,
      director: 'Christopher Nolan',
      actors: 'Leonardo DiCaprio',
      actimg:
        'https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg',
      plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      poster:
        'https://m.media-amazon.com/images/I/91G0gTLz6GL._AC_UF1000,1000_QL80_.jpg',
      trailer: 'https://example.com/inception_trailer.mp4',
      runtime: 148,
      awards: 'Won 4 Oscars',
      country: 'USA',
      language: 'English',
      boxOffice: '$829.9 million',
      production: 'Warner Bros. Pictures',
      website: 'https://www.warnerbros.com/movies/inception',
    },
    {
      id: 7,
      title: 'The Matrix',
      year: 1999,
      genre: ['Action', 'Sci-Fi'],
      rating: 8.7,
      director: 'Lana Wachowski, Lilly Wachowski',
      actors: 'Keanu Reeves',
      actimg:
        'https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_.jpg',
      plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg',
      trailer: 'https://example.com/the_matrix_trailer.mp4',
      runtime: 136,
      awards: 'Won 4 Oscars',
      country: 'USA',
      language: 'English',
      boxOffice: '$463.5 million',
      production: 'Warner Bros. Pictures',
      website: 'https://www.warnerbros.com/movies/matrix',
    },
    {
      id: 8,
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
      genre: ['Adventure', 'Drama', 'Fantasy'],
      rating: 8.9,
      director: 'Peter Jackson',
      actors: 'Elijah Wood',
      actimg:
        'https://m.media-amazon.com/images/M/MV5BMTM0NDIxMzQ5OF5BMl5BanBnXkFtZTcwNzAyNTA4Nw@@._V1_.jpg',
      plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      poster:
        'https://musicart.xboxlive.com/7/8d8d5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      trailer: 'https://example.com/lotr_return_of_the_king_trailer.mp4',
      runtime: 201,
      awards: 'Won 11 Oscars',
      country: 'USA',
      language: 'English',
      boxOffice: '$1.142 billion',
      production: 'New Line Cinema',
      website: 'https://www.lordoftherings.net/film/the-return-of-the-king',
    },
    {
      id: 9,
      title: 'The Dark Knight Rises',
      year: 2012,
      genre: ['Action', 'Thriller'],
      rating: 8.4,
      director: 'Christopher Nolan',
      actors: 'Christian Bale',
      actimg:
        'https://hips.hearstapps.com/hmg-prod/images/christian-bale-arrives-at-the-pale-blue-eye-los-angeles-news-photo-1706895210.jpg',
      plot: "Eight years after the Joker's reign of anarchy, Batman is forced out of retirement to save Gotham City from the brutal guerrilla terrorist Bane.",
      poster:
        'https://musicart.xboxlive.com/7/583d1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      trailer: 'https://example.com/the_dark_knight_rises_trailer.mp4',
      runtime: 165,
      awards: 'Nominated for 2 Oscars',
      country: 'USA',
      language: 'English',
      boxOffice: '$1.081 billion',
      production: 'Warner Bros. Pictures',
      website: 'http://www.warnerbros.com/movies/the-dark-knight-rises',
    },
    {
      id: 10,
      title: 'Interstellar',
      year: 2014,
      genre: ['Adventure', 'Drama', 'Sci-Fi'],
      rating: 8.6,
      director: 'Christopher Nolan',
      actors: 'Matthew McConaughey',
      actimg:
        'https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_FMjpg_UX1000_.jpg',
      plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster:
        'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg',
      trailer: 'https://example.com/interstellar_trailer.mp4',
      runtime: 169,
      awards: 'Won 1 Oscar',
      country: 'USA',
      language: 'English',
      boxOffice: '$677.5 million',
      production: 'Paramount Pictures',
      website: 'http://www.paramount.com/movies/interstellar',
    },
  ],
};

const getMovies = (req, res) => {
  res.render('filmovi', data);
};
const getActors = (req, res) => {
  res.render('akteri', data);
};
const addMovie = (req, res) => {
  const newMovie = {
    id: data.filmovi.length * 1 + 1,
    actimg: req.body.actimg,
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre,
    actors: req.body.actors,
    boxOffice: req.body.boxOffice,
  };

  data.filmovi.push(newMovie);
  const updatedMovies = async () => {
    try {
      await writeFilePro(`${__dirname}/controller/movies.json`, data);
    } catch (err) {
      console.log('Have some errors');
    }
  };
  updatedMovies();
  res.render('filmovi', data);
};
const addActor = (req, res) => {
  const actor = {
    id: data.filmovi.length * 1 + 1,
    poster: req.body.poster,
    actors: req.body.actors,
    genre: req.body.genre,
    rating: req.body.rating,
  };
  console.log(actor);

  data.filmovi.push(actor);

  res.render('akteri', data);
};

module.exports = {
  getMovies,
  addMovie,
  getActors,
  addActor,
};
