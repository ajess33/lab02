'use strict';

$(document).ready(() => {
  const pagNav = $('#image-pages');
  const page = document.createElement('a');
  $(page).addClass('page-link');
  for (let i = 0; i < Math.ceil(Image.all.length / 10); i++) {
    $(page).text((i+1));
    $(page).attr('href', `#${$(page).text()}`);
    $(pagNav).append(page.cloneNode(true));
  }
});
