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

var hourFormat = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// setting the header to correct date and time

$("#currentDay").text(toDate);

// creating a loop for business hours

for (let i = 0; i < businessHours.length; i++) {
  //adding the elements to DOM
  let row = $("<div class='row'>");
  let hourEl = $(" <span class='input-group-text hour'>").text(
    businessHours[i]
  );
  let timeSpace = $("<input type='text'class='box-style'/>").attr("id", i);

  // setting the data atr for colour-code
  if (currentHour === hourFormat[i]) {
    timeSpace.addClass("present");
  } else if (currentHour > hourFormat[i]) {
    timeSpace.addClass("past");
  } else {
    timeSpace.addClass("future");
  }

  let buttonIcon = $("<i class='fas fa-save fa-2x'>");
  let saveButton = $("<button class='btn saveBtn'>")
    .attr("data-id", i)
    .append(buttonIcon);

  row.append(row, hourEl, timeSpace, saveButton);
  $(".container").append(row);
}
// saving to local storage

$(".saveBtn").on("click", function () {
  let btnId = $(this).attr("data-id");
  let event = $("#" + btnId).val();
  let choreObj = JSON.parse(localStorage.getItem("chores")) || [];
  choreObj.push({
    time: btnId,
    description: event,
  });

  // add to local storage
  localStorage.setItem("chores", JSON.stringify(choreObj));
});
// take from local storage

$(document).ready(function () {
  let savedChores = JSON.parse(localStorage.getItem("chores"));
  for (let i = 0; i < savedChores.length; i++) {
    // console.log(savedChores[i].time);
    let logTime = savedChores[i].time;
    let tasksLeft = savedChores[i].description;
    $("#" + logTime).text(tasksLeft);
  }
});
