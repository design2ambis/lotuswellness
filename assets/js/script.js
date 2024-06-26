var swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let currentIndex = 0;
const carouselInner = document.querySelector(".carousel-inner");
const totalItems = document.querySelectorAll(".carousel-item").length;

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalItems - 3 : currentIndex - 1;
  updateCarousel();
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = currentIndex === totalItems - 3 ? 0 : currentIndex + 1;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * (100 / 3);
  carouselInner.style.transform = `translateX(${offset}%)`;
}

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;
    const allAccordionContents =
      document.querySelectorAll(".accordion-content");

    allAccordionContents.forEach((content) => {
      if (content !== accordionContent && content.classList.contains("show")) {
        content.classList.remove("show");

        const accordionHeader = content.previousElementSibling;
        const accordionMinus =
          accordionHeader.querySelector(".accordion-minus");
        const accordionFlower =
          accordionHeader.querySelector(".accordion-flower");
        accordionMinus.classList.add("hidden");
        accordionFlower.classList.remove("hidden");
      }
    });

    accordionContent.classList.toggle("show");

    const accordionMinus = button.querySelector(".accordion-minus");
    const accordionFlower = button.querySelector(".accordion-flower");

    if (accordionContent.classList.contains("show")) {
      accordionMinus.classList.remove("hidden");
      accordionFlower.classList.add("hidden");
    } else {
      accordionMinus.classList.add("hidden");
      accordionFlower.classList.remove("hidden");
    }
  });
});


let Index = 0;
const carouselInner1 = document.querySelector(".carousel-inners");
const totalItems1 = document.querySelectorAll(".carousel-items").length;

document.getElementById("prev1").addEventListener("click", () => {
  Index = Index === 0 ? totalItems1 - 3 : Index - 1;
  updateCarousel1();
});

document.getElementById("next1").addEventListener("click", () => {
  Index = Index === totalItems1 - 3 ? 0 : Index + 1;
  updateCarousel1();
});

function updateCarousel1() {
  const offset1 = -Index * (100 / 3);
  carouselInner1.style.transform = `translateX(${offset1}%)`;
}