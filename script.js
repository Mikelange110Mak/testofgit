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

//const num = 50;

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

/*

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
*/

/////Логические операторы 21//
/*
const hamburger = 5;
const fries = 'netu';

if (hamburger && fries) {
   console.log('im not hungry');
} 
*/
/*
const hamburger = 2;
const fries = 1;

if (hamburger === 3 && fries) {
   console.log('everybody arent hungry')
} else {
   console.log('blya ne pohavali');
}
*/

//Результат будет выдаваться когда оператор наткнется на не правду (0, false итд), а если все правильно, то последнее значение

/*
const hamburger = 0;
const fries = 0;
const cola = 0;

if (hamburger || fries || fries) {
   console.log('everybody are happy')
} else {
   console.log('blya ne pohavali');
}
console.log(hamburger || fries || fries);
*/

/*
let johnReport, kairatReport, bekzatReport, saniyaReport = 'done';
console.log(johnReport || kairatReport || bekzatReport || saniyaReport);
*/

/*
const hamburger = 0;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
   console.log('everybody are happy')
} else {
   console.log('blya ne pohavali');
}
console.log(hamburger || fries || fries);
*/
console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log(5 === 5 && 3 > 1 || 5);



let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
} else {
   console.log('no');
}
