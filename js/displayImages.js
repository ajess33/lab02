'use strict';

$(document).ready(() => {
  const generateImage = (image) => {
    const imageContainer = document.createElement('section');
    const imageTitle = document.createElement('h2');
    const imageImg = document.createElement('img');
    const imageDescription = document.createElement('p');

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

    imageContainer.appendChild(imageTitle.cloneNode(true));
    imageContainer.appendChild(imageImg.cloneNode(true));
    imageContainer.appendChild(imageDescription.cloneNode(true));
    document.getElementsByTagName('main')[0].appendChild(imageContainer);
  };
  Image.all.forEach(image => generateImage(image));
});
