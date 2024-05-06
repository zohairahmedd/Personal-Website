var slider_img = document.querySelector('.slider-img')
var images = ['calc1.png', 'calc2.png', 'calc3.png', 'calc4.png', 'calc5.png'];
var i = 0; // image index

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', 'calculator/' + images[i]);
}