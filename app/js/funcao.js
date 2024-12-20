const imgCarrossel = document.getElementById("img")
const img = document.querySelectorAll("#img img")
console.log(img)
let idImg = 0;

function carrossel() {
    idImg++;
    if (idImg > img.length - 1 ) {
        idImg = 0;
    }

    imgCarrossel.style.transform = `translateX(${ - idImg * 300}px)`
}
setInterval(carrossel,3000)