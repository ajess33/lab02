// DISPLAY IMAGES

Image.all = [];

$.get('../data/page1.json', (data) => {
  data.forEach((image) => {
    new Image(image);
  });
});

function Image(image) {
  this.imageUrl = image.imageUrl;
  this.title = image.title;
  this.description = image.description;
  this.keyword = image.keyword;
  this.horns = image.horns;
  Image.all.push(this);
}
