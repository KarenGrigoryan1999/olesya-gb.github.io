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
}

function startGame(){
    localStorage.setItem('qr', 0);
    window.location.replace('https://karengrigoryan1999.github.io/olesya-gb.github.io/scan.html');
}

const getStage = localStorage.getItem('qr');

if(getStage > 0) {
    window.location.replace('https://karengrigoryan1999.github.io/olesya-gb.github.io/scan.html');
}