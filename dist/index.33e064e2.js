/*edu section*/ const accordion = document.getElementsByClassName("contentBx");
for(i = 0; i < accordion.length; i++)accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
});
const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlayProject");
btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});
close_modals.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
        overlay.classList.remove("active");
    });
});
window.onclick = (event)=>{
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal)=>modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};
overlay.addEventListener("click", ()=>{
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal)=>{
        closeModal(modal);
    });
});
/*Slide Show*/ let slideIndex = 1;
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i1;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for(i1 = 0; i1 < slides.length; i1++)slides[i1].style.display = "none";
    for(i1 = 0; i1 < dots.length; i1++)dots[i1].className = dots[i1].className.replace(" active", "");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
document.addEventListener("DOMContentLoaded", function() {
// showSlides(slideIndex);
}, false);

//# sourceMappingURL=index.33e064e2.js.map
