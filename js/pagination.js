'use strict';

const paginate = e => {
  const imgsToShow = JSON.parse($(e.target).attr('data-images'));
  $('main').html('');
  Image.all.slice(...imgsToShow).forEach(img => {
    generateImage(img);
  });
};
