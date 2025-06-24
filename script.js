// List of image URLs
const images = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1020/600/400',
  'https://picsum.photos/id/1024/600/400',
  'https://picsum.photos/id/1035/600/400',
  'https://picsum.photos/id/1039/600/400'
];

// Reference to gallery container
const gallery = document.getElementById('gallery');

// Loop through images and add them to the page
images.forEach(url => {
  const img = document.createElement('img');
  img.src = url;
  gallery.appendChild(img);
});
