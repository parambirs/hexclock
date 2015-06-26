function getColorStr() {
    return '#' + moment().format('HHmmss');
}

function displayTime() {
    var color = getColorStr();
   
    // set page background color
    $("body").css("background-color", color);

    // set time
    $("#time").html(color);
}

// Update time every second
setInterval(displayTime, 1000);
displayTime();