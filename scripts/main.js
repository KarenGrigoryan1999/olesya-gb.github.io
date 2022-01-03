function nextClick(){
    const secondPage = document.getElementById("second-page");
    const firstPage = document.getElementById("first-page");
    firstPage.classList.toggle("form-shoved");
    secondPage.classList.toggle("form-shoved");
}