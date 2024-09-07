var slider4_img = document.querySelector('.slider4-img')
var imagesFinalUra = ['URA_Final_Project.png', 'URA_Final_Project2.png', 'URA_Final_Project3.png'];
var i = 0; // image index

function prevFinalUra() {
    if (i <= 0) i = imagesFinalUra.length;
    i--;
    return setImgFinalUra();
}

function nextFinalUra() {
    if (i >= imagesFinalUra.length - 1) i = -1;
    i++;
    return setImgFinalUra();
}

function setImgFinalUra() {
    return slider4_img.setAttribute('src', 'URA_Final_Project/' + imagesFinalUra[i]);
}