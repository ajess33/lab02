// DISPLAY IMAGES

Image.all = [];

function Image(imageUrl, title, description, keyword, horns) {
  this.imageUrl = imageUrl;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  Image.all.push(this);
}
