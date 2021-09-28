$('.main-header').append('<div><video id="video-bg" autoplay muted loop ><source src="https://bnerealestate.com/site/assets/files/images/dest/SB_Pattern_02.mp4" type="video/mp4"></video></div>');

$('.tag-line').append('<div><p class="tag2">DESTINATION:</p><p class="tag1">EXTRAORDINARY</p><p class="tag3">New Studio, 1 & 2 Bedroom Waterfront Rentals in South Amboy, NJ</p></div>');

$('.tag-line-wrapper').append('<div><a href="#romance"><img class="arrow animated bounce" src="https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/arrow-circle.png?w=100&h=100" /></a></div>');

$('.top-slider-wrapper').append('<div id="romance"></div>');

$('.amenities-section .section-sub-header').append('<div><p class="sub-head">THE JOURNEY</p><br /></div>');

$('.neighbourhood-section .section-sub-header').append('<div><p class="sub-head">BRAND NEW DAY</p><br /></div>');

$('.stylish-homes-section .section-sub-header').append('<div><p class="sub-head">INCREDIBLE LIVING</p><br /></div>');

// replace Sation Bay with THE WATERFRONT
$('#ctmcontentcontainer h1').text(function (index, text) { return text.replace('Station Bay', 'THE WATERFRONT'); });
$(document).ajaxComplete(function () {
  $('#ctmcontentcontainer h1').text(function (index, text) { return text.replace('Station Bay', 'THE WATERFRONT'); });
});


const currentYear = new Date().getFullYear();
console.log(currentYear)

$('.copyright').append('<div id="new-copyright"><br /> © ' + currentYear + ' BNE Real Estate Group.  All Rights Reserved.<br />Web Design by <a href="https://scibettas1.github.io/#/" target="_blank">Sam Scibetta</a><div>');



$('#map-canvas').append('<div id="map"><iframe width="100%" height="450" frameborder="0" style="border:0" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBoBkPWmTk-mrqAFR6s5ptuiW87wiuryCI&q=place_id:ChIJpeRtzuPNw4kRjBdUV1UsENM" allowfullscreen></iframe></div>');

function initMap() {
  const myLatLng = { lat: 40.4900694, lng: -74.2817293 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
    mapId: "892d9dde9f6dc82e",
  });
  const image = "https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/StationBay_White-map-pin3.png?h=100";
  new google.maps.Marker({
    position: myLatLng,
    map,
    icon: image,
  });
}

initMap()