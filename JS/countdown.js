
var countDownDate = new Date("july 24, 2021 09:00:00").getTime();
var countDown = new Date("july 24, 2021 07:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;
    var dist = countDown - now;
    var hh = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    h = (h < 10) ? "0" + h : h;
    d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;



    if (dist < 0) {
        clearInterval(x);
        document.getElementById("clockdiv").innerHTML = "Event is Over";
    }
    else if (distance < 0) {
        clearInterval(x);
        document.getElementById("clockdiv").innerHTML = "Event is Live";
    }
}, 1000);