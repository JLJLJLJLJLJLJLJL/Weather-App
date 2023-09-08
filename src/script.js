// Display Date & Time ex. Thursday 15:00
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();

let currentDay = days[date.getDay()];
let currentTime = date.getTime();

console.log(currentTime);

// Add search engine
