//DOM elements
let currentDayEl = $('#currentDay');

//get today and put it at the top of the page
let today = dayjs();
currentDayEl.text(today.format("dddd, MMMM D"));

//get time of block and color accordingly

let timeblockEls = $(".row");

timeblockEls.each(function() {
    if ($(this).children().eq(0).text() == "9AM") {
        $(this).children().eq(1).addClass("present")
    }
});


