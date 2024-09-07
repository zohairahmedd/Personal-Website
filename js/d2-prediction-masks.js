var slider3_img = document.querySelector('.slider3-img')
var imagesPrediction = ['d2-prediction-masks1.png', 'd2-prediction-masks2.png'];
var i = 0; // image index

function prevPrediction() {
    if (i <= 0) i = imagesPrediction.length;
    i--;
    return setImgPrediction();
}

function nextPrediction() {
    if (i >= imagesPrediction.length - 1) i = -1;
    i++;
    return setImgPrediction();
}

function setImgPrediction() {
    return slider3_img.setAttribute('src', 'd2-prediction-masks/' + imagesPrediction[i]);
}