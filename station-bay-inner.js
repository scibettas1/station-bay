$('.main-header').prepend('<div class="promo"><a href="#new-copyright">UP TO 2 MONTHS FREE**</a></div>')
$('.main-header').append('<div><video id="video-bg" autoplay muted loop ><source src="https://bnerealestate.com/site/assets/files/images/dest/SB_Pattern_02.mp4" type="video/mp4"></video></div>');

$('.tag-line').append('<div><p class="tag2">SET YOUR SIGHTS</p><p class="tag1">ON THE HORIZON</p></div>');

// gives some space between the heading and the content
$('#RentCafeContent h1').append('<div><br /><div>');

const currentYear = new Date().getFullYear();
console.log(currentYear)

$('.copyright').append('<div id="new-copyright"><br />**Incentives are based on a 26 month lease term and may be valid on select homes.<br />Additional incentives may be available. Prices and promotions are subject to change<br />at any time. Please contact the leasing office for full details.<br /><br /> © ' + currentYear + ' BNE Real Estate Group.  All Rights Reserved.<br />Web Design by <a href="https://scibettas1.github.io/#/" target="_blank">Sam Scibetta</a><div>');

// for the contact page only
$('title').text(function (index, text) { return text.replace('Contact Station Bay to Schedule a Visit', 'Station Bay | Contact Us'); });
  $(document).ajaxComplete(function () {
    $('title').text(function (index, text) { return text.replace('Contact Station Bay to Schedule a Visit', 'Station Bay | Contact Us'); });
  });

  $('#ole_office_address').append('<div class="radford">(Located off of Radford Ferry Road)</div>');
