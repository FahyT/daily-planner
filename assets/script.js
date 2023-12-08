//DOM elements
let currentDayEl = $('#currentDay');
let timeblockEls = $(".row");

//get today and put it at the top of the page
let today = dayjs();
currentDayEl.text(today.format("dddd, MMMM D"));

let currentHour = today.format("H");
let websiteFormat =  today.format("hA");

// loop through all rows and color according to time.
timeblockEls.each(function() {
    if ($(this).children().eq(0).text() == "9AM") {
        $(this).children().eq(1).addClass("present")
    }
});


