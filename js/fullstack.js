var slider7_img = document.querySelector('.slider7-img')
var imagesFullStack = ['fullstack.png', 'fullstack1.png', 'fullstack2.png', 'fullstack3.png', 'fullstack4.png'];
var i = 0; // image index

function prevFullStack() {
    if (i <= 0) i = imagesFullStack.length;
    i--;
    return setImgFullStack();
}

function nextFullStack() {
    if (i >= imagesFullStack.length - 1) i = -1;
    i++;
    return setImgFullStack();
}

function setImgFullStack() {
    return slider7_img.setAttribute('src', 'fullstack/' + imagesFullStack[i]);
}