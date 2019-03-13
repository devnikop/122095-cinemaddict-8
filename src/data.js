import {getRandomInt} from './util.js';

export const filmCard = {
  title: [
    `Avengers: Infinity War`,
    `Black Panther`,
    `Spider-Man: Homecoming`,
    `Captain America: Civil War`,
    `Venom`,
    `Aquaman`,
    `Spider-Man: Into the Spider-Verse`,
    `Wonder Woman`,
    `Logan`,
    `John Wick`,
    `Deadpool`,
    `The Hunger Games`,
    `The Hobbit: The Battle of the Five Armies`,
    `Batman v Superman: Dawn of Justice`,
    `Man of Steel`,
  ][Math.floor(Math.random() * 15)],
  rating: getRandomInt(1, 10),
  year: getRandomInt(1950, 2020),
  duration: `${getRandomInt(60, 300)}`,
  genre: [
    `Action`,
    `Adventure`,
    `Animation`,
    `Comedy`,
    `Crime`,
    `Drama`,
    `Fantasy`,
    `History`,
    `Horror`,
    `Music`,
    `Sci-Fi`,
    `Sport`,
    `Thriller`
  ][Math.floor(Math.random() * 12)],
  poster: `images/posters/blackmail.jpg`,
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. `,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`,
  ][Math.floor(Math.random() * 11)],
  commentsCount: `${getRandomInt(0, 20)}`,
  isOnWatchlist: false,
  isWatched: true,
  isFavorite: false,
};
