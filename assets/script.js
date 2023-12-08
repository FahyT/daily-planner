//DOM elements
let currentDayEl = $('#currentDay');
let timeblockEls = $(".row");
let textboxEls = $("textarea");

//get today and put it at the top of the page
let today = dayjs();
currentDayEl.text(today.format("dddd, MMMM D"));

let currentHour = dayjs().hour();

// loop through all rows and color according to time.
timeblockEls.each(function() {
    if ($(this).children().eq(0).data("hour") < currentHour) {
        $(this).children().eq(1).addClass("past");
    } else if ($(this).children().eq(0).data("hour") == currentHour) {
        $(this).children().eq(1).addClass("present");
    } else {
        $(this).children().eq(1).addClass("future");
    }
});


//function to store the text
function saveText() {

}

//onclick thing


