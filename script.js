const imageUrls = [
  "https://images.unsplash.com/photo-1571607388263-6a8c2d43ec0f", // BMW front view
  "https://images.unsplash.com/photo-1617531653332-98b1c2ebc0d1", // BMW black sports car
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be", // BMW i8
  "https://images.unsplash.com/photo-1603712725036-bc59e8ec6633", // BMW interior
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6", // BMW drifting
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/2019_BMW_M2_Competition_Automatic_3.0.jpg" // BMW M2
];

const gallery = document.getElementById("gallery");

imageUrls.forEach((url) => {
  const img = document.createElement("img");
  img.src = `${url}?w=400&h=300&auto=format`; // Add size/format if from Unsplash
  img.alt = "BMW Car";
  gallery.appendChild(img);
});
