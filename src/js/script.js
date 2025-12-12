// /src/js/script.js
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel && prevButton && nextButton) {
    // calculer dynamiquement la largeur d'un item (fallback à 260)
    const firstItem = carousel.querySelector(".carousel__item");
    const scrollAmount = firstItem ? firstItem.clientWidth : 260;

    // clic sur précédent
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // clic sur suivant
    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
    });
}
