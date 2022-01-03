function nextClick(){
    const secondPage = document.getElementById("second-page");
    const firstPage = document.getElementById("first-page");
    firstPage.classList.toggle("form-shoved");
    secondPage.classList.toggle("form-shoved");
    localStorage.setItem('stage', 1);
}

function toQRClick(){
    const secondPage = document.getElementById("second-page");
    const threePage = document.getElementById("three-page");
    threePage.classList.toggle("form-shoved");
    secondPage.classList.toggle("form-shoved");
    localStorage.setItem('stage', 2);
}