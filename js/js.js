const images = 
[
    'images/shein11.jpg',
    'images/shein16.jpg',
    'images/shein12.jpg',
    'images/shein4.jpg',
    'images/shein2.jpg',
    'images/shein15.jpg',
    'images/shein10.jpg',
];

let currentImageIndex = 0;

function changeimage() {
    document.getElementById('img').src = images[++currentImageIndex % images.length];
}
