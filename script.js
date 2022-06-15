//1
const numberOfFilms = +prompt('Сколько фильмов чекнул?', '');

//2
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}

//3
const a = prompt('Последний просмотренный фильм?'),
   b = + prompt('На сколько оцените его?'),
   c = prompt('Последний просмотренный фильм?'),
   d = + prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
