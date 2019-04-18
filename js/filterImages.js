'use strict';

$(document).ready(() => {
  const filter = $('#filter');
  const filterOption = document.createElement('option');
  const options = [];
  Image.all.forEach(image => !options.includes(image.keyword) ? options.push(image.keyword) : '');
  options.forEach(option => $(filterOption).clone().attr('value', option).text(option).appendTo('#filter optgroup:first'));

  const sortImages = (filterValue) => {
    if (filterValue === 'a-to-z') {
      Image.all.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterValue === 'z-to-a') {
      Image.all.sort((a, b) => b.title.localeCompare(a.title));
    } else if (filterValue === 'high-to-low') {
      Image.all.sort((a, b) => b.horns - a.horns);
    } else if (filterValue === 'low-to-high') {
      Image.all.sort((a, b) => a.horns - b.horns);
    }
  };

  sortImages('a-to-z');
  Image.all.forEach(image => generateImage(image));

  filter.change(() => {
    let selectedOption = filter.val();
    if (filter[0].selectedIndex < $('#filter option').length - 4) {
      Object.values($('.image')).forEach(image => {
        if (selectedOption === 'default') {
          $(image).show();
        } else if ($(image).attr('data-keyword') !== $('#filter option:selected').text() && filter[0].selectedIndex < $('#filter option').length - 4) {
          $(image).hide();
        } else {
          $(image).show();
        }
      });
    } else {
      $('main').html('');
      sortImages(filter.val());
      Image.all.forEach(image => generateImage(image));
    }
  });
});
