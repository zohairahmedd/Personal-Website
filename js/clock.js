var slider5_img = document.querySelector('.slider5-img')
var imagesClock = ['clock1.png', 'clock2.png', 'clock3.png'];
var i = 0; // image index

function prevClock() {
    if (i <= 0) i = imagesClock.length;
    i--;
    return setImgClock();
}

function nextClock() {
    if (i >= imagesClock.length - 1) i = -1;
    i++;
    return setImgClock();
}

function setImgClock() {
    return slider5_img.setAttribute('src', 'clock/' + imagesClock[i]);
}