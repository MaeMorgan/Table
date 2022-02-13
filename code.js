//creates a function that disables the start button while enabling the stop button if it is disabled
function start() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}

//creates a function that disables the stop button while enabling the start button if it is disabled
function stop(){
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}