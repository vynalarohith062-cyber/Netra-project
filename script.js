// ubdates the dashboard clock
function updateClock() {
    const clock = document.getElementById("clock");
    if(clock)
        clock.textContent = new Date().toLocaleTimeString();
}
//Run once now, then repete every 1000 ms
updateClock();
setInterval(updateClock, 1000);