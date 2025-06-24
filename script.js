const images = [
  "https://cdn.pixabay.com/photo/2016/11/22/19/22/bmw-1854734_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/02/17/17/41/bmw-4857036_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/01/19/17/46/bmw-1144911_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/02/10/19/33/bmw-4836245_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/06/23/20/16/car-3492930_1280.jpg"
];

// Get the gallery container
const gallery = document.getElementById("gallery");

// Loop through the image list and create <img> elements
images.forEach((url, index) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = `BMW Car ${index + 1}`;
  gallery.appendChild(img);
});
