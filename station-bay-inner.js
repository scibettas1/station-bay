$('.main-header').append('<div><video id="video-bg" autoplay muted loop ><source src="https://bnerealestate.com/site/assets/files/images/dest/SB_Pattern_02.mp4" type="video/mp4"></video></div>');

$('.tag-line').append('<div><p class="tag2">SET YOUR SIGHTS</p><p class="tag1">ON THE HORIZON</p>');

const currentYear = new Date().getFullYear();
console.log(currentYear)

$('.copyright').append('<div id="new-copyright"><br /> © ' + currentYear + ' BNE Real Estate Group.  All Rights Reserved.<br />Web Design by <a href="https://scibettas1.github.io/#/" target="_blank">Sam Scibetta</a><div>');
