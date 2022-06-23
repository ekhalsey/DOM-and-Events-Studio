// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeoffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const rocket = document.getElementById("rocket");

    takeoffButton.addEventListener("click", event => {
       let confirmed = window.confirm("Confirm that the shuttle is ready for takeoff.");
       if (confirmed) {
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleBackground.style.backgroundColor = "blue";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
       }
    });

    landButton.addEventListener("click", event => {
        window.confirm("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });

    up.addEventListener("click", event => {
        rocket.style.bottom = 10;
        console.log(rocket.bottom);
        console.log(rocket.style.bottom);
    });

}

window.addEventListener("load", init);