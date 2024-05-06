var slider2_img = document.querySelector('.slider2-img')
var imagesUnreal = ['unreal1.png', 'unreal2.png', 'unreal3.png', 'unreal4.png', 'unreal5.png', 'unreal6.png'];
var i = 0; // image index

function prevUnreal() {
    if (i <= 0) i = imagesUnreal.length;
    i--;
    return setImgUnreal();
}

function nextUnreal() {
    if (i >= imagesUnreal.length - 1) i = -1;
    i++;
    return setImgUnreal();
}

function setImgUnreal() {
    return slider2_img.setAttribute('src', 'unreal/' + imagesUnreal[i]);
}