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

// use JSON to save the text at the given hour it is entered as a string in local storage
function renderText () {
    var save9entry = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(save9entry);
    
    var save910ntry = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(save10entry);
    
    var save11entry = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(save11entry);
    
    var save12entry = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(save12entry);
    
    var save1entry = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#1").val("");
    $("#1").val(save1entry);

    var save2entry= JSON.parse(localStorage.getItem("2:00 pm"));
    $("#2").val("");
    $("#2").val(save2entry);

    var save3entry= JSON.parse(localStorage.getItem("3:00 pm"));
    $("#3").val("");
    $("#3").val(save3entry);

    var save4entry = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#4").val("");
    $("#4").val(save4entry);

    var save5entry = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#5").val("");
    $("#5").val(save5entry);
}
