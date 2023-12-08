//DOM elements
let currentDayEl = $('#currentDay');

//get today and put it at the top of the page
let today = dayjs();
currentDayEl.text(today.format("dddd, MMMM D"));




