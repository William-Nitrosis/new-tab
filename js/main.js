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
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m ;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
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

