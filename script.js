const images = [
  "7 series.jpg",
  "a8.jpg",
  "s class.jpg",
  "cullinan.jpg",
  ];

// Get the gallery container
const gallery = document.getElementById("gallery");

// Loop through the image list and create <img> elements
images.forEach((url, index) => {
  const img = document.createElement("img");
  img.src = https://github.com/sidharthkv1100/imagegallery;
  gallery.appendChild(img);
});
