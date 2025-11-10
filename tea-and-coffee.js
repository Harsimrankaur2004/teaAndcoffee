const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const cardContainer = document.querySelector(".card-container");

const scrollAmount = 500;

leftArrow.addEventListener("click", () => {
  cardContainer.scrollBy({left: -scrollAmount, behavior: "smooth"});
});

rightArrow.addEventListener("click", () => {
  cardContainer.scrollBy({left: scrollAmount, behavior: "smooth"});
});