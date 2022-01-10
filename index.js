const clock = () => {

    let getTime = new Date()
    let hrs = getTime.getHours()
    let min = getTime.getMinutes();
    let sec = getTime.getSeconds();

    if (sec <= 9) {

        document.getElementById("hours").innerHTML = hrs;
        document.getElementById("minutes").innerHTML = min;
        document.getElementById("seconds").innerHTML = `0${sec}`;
    } else if (min <= 9) {

        document.getElementById("hours").innerHTML = hrs;
        document.getElementById("minutes").innerHTML = `0${min}`;
        document.getElementById("seconds").innerHTML = sec;

    } else {

        document.getElementById("hours").innerHTML = hrs;
        document.getElementById("minutes").innerHTML = min;
        document.getElementById("seconds").innerHTML = sec;
    }

    if (hrs == 24 || hrs <= 12 ) {
        document.getElementById("AmPm").innerHTML = "AM"
    }

}
let result = setInterval(clock, 1000);