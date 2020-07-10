var container = document.querySelector('.container');
var canvasHtml = document.querySelector('#canvasHtml');
var btnEnlarge = document.querySelector('.btnEnlarge');

function enlargeCanvas() {
    container.style.width = '100%';
    container.style.height = '100vh';
    container.style.margin = '0';
    canvasHtml.style.width = '100%';
    canvasHtml.style.height = '100vh';
    canvasHtml.style.backgroundSize = 'cover';
    canvasHtml.style.backgroundRepeat = 'no-repeat';
    btnEnlarge.innerHTML = ' Reducir Canvas ';
    btnEnlarge.style.position = 'fixed';
    btnEnlarge.style.top = '10px';
    btnEnlarge.style.left = '10px';
    btnEnlarge.style.zIndex = '3';
    btnEnlarge.setAttribute('onClick','reduceCanvas()');
}

function reduceCanvas() {
    container.style.width = '1000px';
    container.style.height = '500px';
    container.style.margin = '5vh auto';
    canvasHtml.style.width = '1000px';
    canvasHtml.style.height = '500px';
    btnEnlarge.innerHTML = ' Ampliar Canvas ';
    btnEnlarge.style.position = 'relative';
    btnEnlarge.style.top = '0';
    btnEnlarge.style.left = '0';
    btnEnlarge.style.zIndex = '0';
    btnEnlarge.setAttribute('onClick', 'enlargeCanvas()');
}