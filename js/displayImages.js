'use strict';

$(document).ready(() => {
  const doc = $(document);
  const generateImage = (image) => {
    const imageContainer = doc.createElement('section');
    const imageTitle = doc.createElement('h2');
    const imageImg = doc.createElement('img');
    const imageDescription = doc.createElement('p');

    $(imageContainer).addClass('image');
    $(imageContainer).attr({
      'data-keyword': image.keyword,
      'data-horns': image.horns
    });
    $(imageTitle).text(image.title);
    $(imageImg).attr({
      src: image.imageUrl,
      alt: image.title
    });
    $(imageDescription).text(image.description);

    imageContainer.appendChild(imageTitle.cloneNode());
    imageContainer.appendChild(imageImg.cloneNode());
    imageContainer.appendChild(imageDescription.cloneNode());
    $('main').appendChild(imageContainer);
  };
  Image.all.forEach(image => generateImage(image));
});
