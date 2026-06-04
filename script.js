const planItems = [
  {
    src: "assets/guests.png",
    alt: "11:00 Сбор гостей",
  },
  {
    src: "assets/ceremony.png",
    alt: "11:50 Церемония бракосочетания",
  },
  {
    src: "assets/banquet.png",
    alt: "16:00 Праздничный банкет",
  },
];

let currentPlanIndex = 0;

const planCard = document.querySelector(".plan-card");
const planImage = document.querySelector("[data-plan-image]");
const dots = [...document.querySelectorAll(".slider-dots span")];

function renderPlan(index) {
  currentPlanIndex = (index + planItems.length) % planItems.length;
  const item = planItems[currentPlanIndex];

  planCard.classList.add("is-changing");
  window.setTimeout(() => {
    planImage.src = item.src;
    planImage.alt = item.alt;
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === currentPlanIndex);
    });
    planCard.classList.remove("is-changing");
  }, 180);
}

document.querySelector("[data-next]").addEventListener("click", () => {
  renderPlan(currentPlanIndex + 1);
});
