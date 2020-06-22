const m = moment();

// variables for on save button click 
var words;
var hourInfo;

// under the workday scheduler the current day is listed
$("#currentDay").text(m.format("dddd, MMMM Do"));

// if a timeblock is in the past, present or future a color red, green or grey is coded in the time block 
$(document).ready( function() {
    colorChange ();
    renderText ();
});

function colorChange () {
    
    var realTime = moment().hours();

    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        
        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realTime < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

// when the save button is clicked the corresponding event or task saves according to the corresponding time block
$(".saveBtn").click(function() {
    words = $(this).siblings(".input").val();
    console.log(words);
    hourInfo = $(this).siblings(".hour").text();
    console.log(hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(words));
    
    colorChange ();
    renderText ();
})


