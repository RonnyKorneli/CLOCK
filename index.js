const clock = () => {

    let getTime = new Date()
    let hrs = getTime.getHours()
    let min = getTime.getMinutes();
    let sec = getTime.getSeconds();


    if (hrs > 12) {
        document.getElementById("AmPm").innerHTML = "PM"
    }
    if (hrs == 0) {
        hrs = 12;
        document.getElementById("AmPm").innerHTML = "AM"
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    

}
let result = setInterval(clock, 1000);