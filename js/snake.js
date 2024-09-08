var slider6_img = document.querySelector('.slider6-img')
var imagesSnake = ['snake1.png', 'snake2.png'];
var i = 0; // image index

function prevSnake() {
    if (i <= 0) i = imagesSnake.length;
    i--;
    return setImgSnake();
}

function nextSnake() {
    if (i >= imagesSnake.length - 1) i = -1;
    i++;
    return setImgSnake();
}

function setImgSnake() {
    return slider6_img.setAttribute('src', 'snake/' + imagesSnake[i]);
}