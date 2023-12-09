//DOM elements
let currentDayEl = $('#currentDay');
let timeblockEls = $(".row");
let containter = $('container');

//time variables
let today = dayjs();
let currentHour = dayjs().hour();

//get today and put it at the top of the page
currentDayEl.text(today.format("dddd, MMMM D"));

// loop through all rows, color according to time, and add events text from local storage.
timeblockEls.each(function() {
    //color rows
    if ($(this).children().eq(0).data("hour") < currentHour) {
        $(this).children().eq(1).addClass("past");
    } else if ($(this).children().eq(0).data("hour") == currentHour) {
        $(this).children().eq(1).addClass("present");
    } else {
        $(this).children().eq(1).addClass("future");
    }

    $(this).children().eq(1).val(localStorage.getItem($(this).children().eq(0).data("hour"))); //get event from local storage

});

//click any save button, store corresponding textbox value to local storage
$('.saveBtn').on("click", function() {
    localStorage.setItem($(this).parent().children().eq(0).data("hour"), $(this).parent().children().eq(1).val());
})
