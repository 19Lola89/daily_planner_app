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
  let timeSpanner = $(this).attr("data-id");
  let event = $("#" + timeSpanner).val();
  let choreObj = JSON.parse(localStorage.getItem("chores")) || [];
  choreObj.push({
    location: timeSpanner,
    description: event,
  });
  localStorage.setItem("chores", JSON.stringify(choreObj));
});

// take from local storage

$(document).ready(function () {
  let storageTasks = JSON.parse(localStorage.getItem("chores")) || [];

  for (let i = 0; i < storageTasks.length; i++) {
    let taskLocation = storageTasks[i].location;
    let taskDescription = storageTasks[i].description;
    $("#" + taskLocation).val(taskDescription);
  }
});

// $(document).ready(function () {
//   let storageTasks = JSON.parse(localStorage.getItem("chores")) || [];

//   for (let i = 0; i < storageTasks.length; i++) {
//     let taskLocation = storageTasks[i].location;
//     let taskText = storageTasks[i].description;
//     $("#" + taskLocation).val(taskText);
//   }
// });
