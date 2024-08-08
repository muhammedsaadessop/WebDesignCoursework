let currentImageIndex = 0;
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
];

function displayImage(imageSrc) {
    document.getElementById('displayed-image').src = imageSrc;
    currentImageIndex = images.indexOf(imageSrc);
}

function startSlideshow() {
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        document.getElementById('displayed-image').src = images[currentImageIndex];
    }, 3000); 
}


function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightbox.style.display = 'block';
    lightboxImage.src = document.getElementById('displayed-image').src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}


window.onload = startSlideshow;
