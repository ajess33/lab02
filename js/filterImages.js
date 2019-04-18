'use strict';

$(document).ready(() => {
  const filter = $('#filter');
  const filterOption = document.createElement('option');
  const options = [];
  Image.all.forEach(image => !options.includes(image.keyword) ? options.push(image.keyword) : '');
  options.forEach(option => $(filterOption).clone().attr('value', option).text(option).appendTo('#filter optgroup:first'));

  const filterImages = (selectedOption) => {
    Object.values($('.image')).forEach(image => {
      if (selectedOption === 'default') {
        $(image).show();
      } else if ($(image).attr('data-keyword') !== $('#filter option:selected').text()) {
        $(image).hide();
      } else {
        $(image).show();
      }
    });
  };

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
  Image.all.slice(0, 10).forEach(image => generateImage(image));

  filter.change(() => {
    let selectedOption = filter.val();
    if (filter[0].selectedIndex < $('#filter option').length - 4) {
      filterImages(selectedOption);
    } else {
      $('main').html('');
      sortImages(filter.val());
      Image.all.slice(...JSON.parse($(`[href='${window.location.hash}']`).attr('data-images'))).forEach(image => generateImage(image));
    }
  });
});
