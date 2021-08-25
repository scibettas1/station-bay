$('.main-header').append('<div><video id="video-bg" autoplay muted loop ><source src="https://bnerealestate.com/site/assets/files/images/dest/SB_Pattern_02.mp4" type="video/mp4"></video></div>');

$('.tag-line').append('<div><p class="tag2">DESTINATION:</p><p class="tag1">EXTRAORDINARY</p><p class="tag3">New Studio, 1 & 2 Bedroom Waterfront Rentals in South Amboy, NJ</p></div>');

// $('.tag-line-wrapper').append('<div><i class="fa-solid fa-arrow-down-long"></i></div>');

$('.amenities-section .section-sub-header').append('<div><p class="sub-head">THE JOURNEY</p><br /></div>');

$('.neighbourhood-section .section-sub-header').append('<div><p class="sub-head">BRAND NEW DAY</p><br /></div>');

$('.stylish-homes-section .section-sub-header').append('<div><p class="sub-head">INCREDIBLE LIVING</p><br /></div>');

// replace Sation Bay with THE WATERFRONT
$('#ctmcontentcontainer h1').text(function (index, text) { return text.replace('Station Bay', 'THE WATERFRONT'); });
$(document).ajaxComplete(function () {
  $('#ctmcontentcontainer h1').text(function (index, text) { return text.replace('Station Bay', 'THE WATERFRONT'); });
});