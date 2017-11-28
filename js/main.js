/* Useful shit i havent done yet

https://codepen.io/bartwal/pen/OXOoWN

*/

// js clock

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    h = checkTime(h);
    h = hours(h);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m ;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
return i;
}

function hours(i) {
    if (i >= 13) {i = -12 + i}  // turn to 12 hour
    return i;
}


// date
var now = new Date();
document.getElementById("date").innerHTML = dateFormat(now, "dddd dS, mmmm yyyy");

// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
    $('.js-geolocation').show();
} else {
    $('.js-geolocation').hide();
}


$(document).ready(function() {
    loadWeather('England',''); //@params location, woeid
});


// Count down
var countDownDate = new Date("Jan 12, 2018").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("countdownDisplay").innerHTML = days + " Days ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function(weather) {
            html = '<div class="vcentre40"> <h2 class="noPad"><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            html += '<div class="weatherLocation">' + weather.city+weather.region + '</div>';
            html += '<div class="weatherLocation">' +weather.currently + '</div></div>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
}

navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
});


// quick links
$(".qlLinks-1").hover(function () {
    $(".qlLinksContent-1").stop().slideToggle();
});

$(".qlLinks-2").hover(function () {
    $(".qlLinksContent-2").stop().slideToggle();
});

$(".qlLinks-3").hover(function () {
    $(".qlLinksContent-3").stop().slideToggle();
});


startTime();

function loadPage(page) {
    $("#index").css("display", "none");
    $("#email").css("display", "none");
    $("#countdown").css("display", "none");
    $("#notes").css("display", "none");

    switch(page) {
        case index:
            $("#index").css("display", "inherit");
            break;
        case email:
            $("#email").css("display", "inherit");
            break;
        case countdown:
            $("#countdown").css("display", "inherit");
            break;
        case notes:
            $("#notes").css("display", "inherit");
            break;
    }
}
