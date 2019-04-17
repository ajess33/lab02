'use strict';

$(document).ready(() => {
  const filter = $('#filter');
  const filterOption = document.createElement('option');
  const options = [];
  $.get(
    '../data/page1.json',
    data => {
      data.forEach(image => {
        !options.includes(image.keyword) ? options.push(image.keyword) : '';
      });
    },
    'json'
  ).done(() => options.forEach(option => $(filterOption).clone().attr('value', option).text(option).appendTo(filter)));

  filter.on('change', () => {
    Object.values($('.image')).forEach(image => {
      if (filter[0].selectedIndex === 0) {
        $(image).show();
      } else if ($(image).attr('data-keyword') !== $('#filter option:selected').text()) {
        $(image).hide();
      } else {
        $(image).show();
      }
    });
  });
});
