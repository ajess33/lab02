// DISPLAY IMAGES

Image.all = [];

// populate the images on page load
$.when(
  $.get(
    './data/page1.json',
    (data) => {
      data.forEach((image) => {
        new Image(image);
      });
    },
    'json'
  ),

  $.get(
    './data/page2.json',
    (data) => {
      data.forEach((image) => {
        new Image(image);
      });
    },
    'json'
  )
).then(() => {
  const pagNav = $('#image-pages');
  const page = document.createElement('a');
  $(page).addClass('page-link');
  for (let i = 0; i < Math.ceil(Image.all.length / 10); i++) {
    $(page).text((i+1));
    $(page).attr('href', `#${$(page).text()}`);
    $(pagNav).append(page.cloneNode(true));
  }
});




function Image(image) {
  this.imageUrl = image.image_url;
  this.title = image.title;
  this.description = image.description;
  this.keyword = image.keyword;
  this.horns = image.horns;
  Image.all.push(this);
}
