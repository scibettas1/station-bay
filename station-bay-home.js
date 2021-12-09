$('.main-header').prepend('<div class="promo"><a href="#new-copyright">UP TO 2 MONTHS FREE**</a></div>')
$('.main-header').append('<div><video id="video-bg" autoplay muted loop ><source src="https://bnerealestate.com/site/assets/files/images/dest/SB_Pattern_02.mp4" type="video/mp4"></video></div>')


$('.tag-line').append('<div><p class="tag2">DESTINATION:</p><p class="tag1">EXTRAORDINARY</p><p class="tag3">New Studio, 1 & 2 Bedroom Waterfront Rentals in South Amboy, NJ</p></div>');

$('.tag-line-wrapper').append('<div><a href="#romance"><img class="arrow animated bounce" src="https://cdngeneralcf.rentcafe.com/dmslivecafe/2/70799/arrow-circle.png?w=100&h=100" /></a></div>');


$('.romance-para-section').prepend('<div class="anchor"><span id="romance"></span></div>');

// replace Station Bay with THE WATERFRONT
$('#ctmcontentcontainer h1').text(function (index, text) { return text.replace('Station Bay', 'THE WATERFRONT'); });
$(document).ajaxComplete(function () {
  $('#ctmcontentcontainer h1').text(function (index, text) { return text.replace('Station Bay', 'THE WATERFRONT'); });
});

$('.amenities-section .content-wrapper').prepend('<div><h1>FEATURES & AMENITIES</h1><br /></div>');
$('.amenities-section .section-sub-header').append('<div><p class="sub-head">THE JOURNEY</p><br /></div>');

$('.neighbourhood-section .wrapper').prepend('<div><h1>RESIDENCES</h1><br /></div>');
$('.neighbourhood-section .section-sub-header').append('<div><p class="sub-head">INCREDIBLE LIVING</p></div>');
$('.neighbourhood-section p.section-para').append('<div class="btn-wrapper"><a href="floorplans.aspx"><div class="btn btn-primary"></div></a></div>');

$('.stylish-homes-section .custom-scroll-content').prepend('<div><h1>NEIGHBORHOOD</h1><br /></div>');
$('.stylish-homes-section .section-sub-header').append('<div><p class="sub-head">BRAND NEW DAY</p><br /></div>');
$('.stylish-homes-section p.para-2').append('<div class="btn-wrapper show"><a href="neighborhood.aspx"><div class="btn btn-primary"></div></a></div>');

$('.address-wrapper .wrapper').prepend('<div><h1>CONTACT US</h1><br /></div>');
$('.address-wrapper .section-sub-header').append('<div><p class="sub-head">FOR YOU</p></div>');
$('.address-wrapper #address').append('<div class="addy"><a href="https://www.google.com/maps/place/Radford+Ferry+Rd,+South+Amboy,+NJ+08879/@40.488462,-74.2855273,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3ca48c5762d01:0x649b7de82933dfda!8m2!3d40.488462!4d-74.2833386" target="_blank">1000 Schindler Drive (Located off Radford Ferry Road)<br/>South Amboy, NJ 08879</a></div>');


const currentYear = new Date().getFullYear();
console.log(currentYear)

$('.copyright').append('<div id="new-copyright"><br />“*Incentives are based on a 26 month lease term and may be valid on select homes.<br />Additional incentives may be available. Prices and promotions are subject to change<br />at any time. Please contact the leasing office for full details.<br /><br /> © ' + currentYear + ' BNE Real Estate Group.  All Rights Reserved.<br />Web Design by <a href="https://scibettas1.github.io/#/" target="_blank">Sam Scibetta</a><div>');



$('#map-canvas').append('<div id="map"><iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/place/Station+Bay+at+South+Amboy/@40.4862833,-74.2820511,17z/data=!4m13!1m7!3m6!1s0x89c3ca48c5762d01:0x649b7de82933dfda!2sRadford+Ferry+Rd,+South+Amboy,+NJ+08879!3b1!8m2!3d40.488462!4d-74.2833386!3m4!1s0x89c3cb46849d5895:0x99d4d2d01e519947!8m2!3d40.4862442!4d-74.2802702" allowfullscreen></iframe></div>');

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