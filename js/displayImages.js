('use strict');

const generateImage = (image) => {
  // const imageContainer = document.createElement('section');
  // const imageTitle = document.createElement('h2');
  // const imageImg = document.createElement('img');
  // const imageDescription = document.createElement('p');

  // $(imageContainer).addClass('image');
  // $(imageContainer).attr({
  //   'data-keyword': image.keyword,
  //   'data-horns': image.horns
  // });
  // $(imageTitle).text(image.title);
  // $(imageImg).attr({
  //   src: image.imageUrl,
  //   alt: image.title
  // });
  // $(imageDescription).text(image.description);

  // imageContainer.appendChild(imageTitle.cloneNode(true));
  // imageContainer.appendChild(imageImg.cloneNode(true));
  // imageContainer.appendChild(imageDescription.cloneNode(true));
  // document.getElementsByTagName('main')[0].appendChild(imageContainer);

  // get template data from html
  const template = $('#image-template').html();

  // compile template data into a function
  const templateScript = Handlebars.compile(template);

  const imageData = {
    data_keyword: image.keyword,
    title: image.title,
    image_url: image.imageUrl,
    description: image.description,
    horns: image.horns
  };

  let html = templateScript(imageData);
  $('main').append(html);
};

// const showModule = (e) => {
//   console.log(e);
//   // const image = `<img src=${e.target.imageUrl}`
// };

$('img').click((e) => console.log(e.target));
