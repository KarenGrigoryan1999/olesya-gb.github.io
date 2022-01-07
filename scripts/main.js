function nextClick(){
    const secondPage = document.getElementById("second-page");
    const firstPage = document.getElementById("first-page");
    firstPage.classList.toggle("form-shoved");
    secondPage.classList.toggle("form-shoved");
}

function toQRClick(){
    const secondPage = document.getElementById("second-page");
    const threePage = document.getElementById("three-page");
    threePage.classList.toggle("form-shoved");
    secondPage.classList.toggle("form-shoved");
    localStorage.setItem('stage', 2);
}

function startGame(){
    localStorage.setItem('qr', 0);
}

const getStage = localStorage.getItem('qr');

console.log(getStage);

if(getStage) {
    window.location.replace('https://karengrigoryan1999.github.io/olesya-gb.github.io/scan.html');
}