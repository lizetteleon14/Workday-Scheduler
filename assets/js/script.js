const m = moment();

// variables for on save button click 
var words;
var hourInfo;

// under the workday scheduler the current day is listed
console.log(m.format("dddd, MMMM Do"));
$("#currentDay").text(m.format("dddd, MMMM Do"));


