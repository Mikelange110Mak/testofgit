/*

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

*/

/*
if (4 == 9) {
   console.log('OK!');
} else {
   console.log('Errorchik');
}
*/

const num = 50;

/*
if (num < 49) {
   console.log('Error');
} else if (num > 100) {
   console.log('Mnogo');
} else {
   console.log('Ok1');
}
*/

//(num === 50) ? console.log('Right!') : console.log('Errorushka(');;

switch (num) {
   case 49:
      console.log('not right');
      break;
   case 100:
      console.log('not right');
      break
   case 50:
      console.log('at the point!');
      break
   default:
      console.log('Расслабься ковбой!');
      break
}