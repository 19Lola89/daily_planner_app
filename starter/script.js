// use moment js to compare current time using moment js to hours in the day. use conditionals to do that. Its to do with red and greeen rows. relates to color. color-code past, present and future.

// save button save to local storage.
//pseudo code :
// 2. calendar shows 9am to 5pm hourly text row with save button
// 3. current hour is highlighted one colour, past- the other and future another (use data-sets? )
// 4. save button and local storage, input field obv
// 5.

//setting variables needed
const toDate = moment().format("MMMM Do YYYY");
const currentHour = moment().hour();

// const militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

var businessHours = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
];
// setting the header to correct date and time

$("#currentDay").text(toDate);
