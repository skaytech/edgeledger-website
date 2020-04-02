//Map function introduced as an iframe due to google restrictions
// // Initialize and add the map
// function initMap() {
//     // The location of navimum
//     var navimum = { lat: 19.028570, lng: 73.021350 };
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.querySelector('.map'), { zoom: 14, center: navimum });
//     // The marker, positioned at navimum
//     var marker = new google.maps.Marker({ position: navimum, map: map });
// }

//smooth scroll JS Snippet
$("#navbar a, .btn").click(function(e) {
    if (this.hash != '') {
        e.preventDefault();

        const hash = this.hash;
        var position = $(hash).offset().top - 100;

        $("body, html").animate({
            scrollTop: position
        }, 1000);
    }
});

//Add opacity to navbar on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});