const images = [
  "7 series.jpg",
  "a8.jpg",
  "cullinan.jpg",
  "s class.jpg"
];

// Get the gallery container
const gallery = document.getElementById("gallery");

// Loop through the image list and create <img> elements
images.forEach((imageName, index) => {
  const img = document.createElement("img");
  img.src = `images/${imageName}`;
  img.alt = `Photo ${index + 1}`;
  gallery.appendChild(img);
});
