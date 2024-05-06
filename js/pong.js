var slider1_img = document.querySelector('.slider1-img')
var imagesPong = ['pong1.png', 'pong2.png', 'pong3.png'];
var i = 0; // image index

function prevPong() {
    if (i <= 0) i = imagesPong.length;
    i--;
    return setImgPong();
}

function nextPong() {
    if (i >= imagesPong.length - 1) i = -1;
    i++;
    return setImgPong();
}

function setImgPong() {
    return slider1_img.setAttribute('src', 'pong/' + imagesPong[i]);
}