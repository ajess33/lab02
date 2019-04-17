'use strict';

$(document).ready(() => {
  const filter = $('#filter');
  const filterOption = document.createElement('option');
  const options = [];
  $.get(
    './data/page1.json',
    data => {
      data.forEach(image => {
        !options.includes(image.keyword) ? options.push(image.keyword) : '';
      });
    },
    'json'
  ).done(() => options.forEach(option => $(filterOption).clone().attr('value', option).text(option).appendTo('#filter optgroup:first')));

  filter.change(() => {
    let selectedOption = filter.val();
    Object.values($('.image')).forEach(image => {
      if (selectedOption === 'default') {
        $(image).show();
      } else if ($(image).attr('data-keyword') !== $('#filter option:selected').text() && filter[0].selectedIndex < $('#filter option').length - 4) {
        $(image).hide();
      } else {
        $(image).show();
      }
    });
  });
});
