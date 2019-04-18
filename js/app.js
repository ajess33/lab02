// DISPLAY IMAGES

Image.all = [];

// populate the images on page load
$.get(
  './data/page1.json',
  (data) => {
    data.forEach((image) => {
      new Image(image);
    });
  },
  'json'
);

$.get(
  './data/page2.json',
  (data) => {
    data.forEach((image) => {
      new Image(image);
    });
  },
  'json'
);

function Image(image) {
  this.imageUrl = image.image_url;
  this.title = image.title;
  this.description = image.description;
  this.keyword = image.keyword;
  this.horns = image.horns;
  Image.all.push(this);
}
