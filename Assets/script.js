
// Execute a function when the document is fully loaded
$(document).ready(function () {
  // Display current day
  var today = dayjs();
  $("#currentDay").text(today.format('MMM D, YYYY'));

  // Add a listener for click events on the save button. 
  $(".saveBtn").on('click', function () {
    //Store task in localStorage
    var task = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time,task);
  });

  // Gets current hour
  var currentHour = dayjs().hour() 
  //Loop through all time-block to update class name
  $('.time-block').each(function(){
    var hourCalendar = parseInt($(this).attr("id").split("-")[1])
    
    if (hourCalendar < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (hourCalendar === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }}
  )

  // Load task from local storage 
  // Update the value in each time-block textarea
  $('.time-block').each(function(){
    $(this).children('.description').val(localStorage.getItem($(this).attr("id")))
  })

});
