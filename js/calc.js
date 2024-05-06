var slider_img = document.querySelector('.slider-img')
var imagesCalc = ['calc1.png', 'calc2.png', 'calc3.png'];
var i = 0; // image index

function prevCalc() {
    if (i <= 0) i = imagesCalc.length;
    i--;
    return setImgCalc();
}

function nextCalc() {
    if (i >= imagesCalc.length - 1) i = -1;
    i++;
    return setImgCalc();
}

function setImgCalc() {
    return slider_img.setAttribute('src', 'calculator/' + imagesCalc[i]);
}