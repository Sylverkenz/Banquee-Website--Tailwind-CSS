let clicked;
const allSections = document.querySelectorAll(".section");
const tabContainer = document.querySelector(".tabs__container");
const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");


const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) entry.target.classList.remove("section--hidden");

  if (entry.isIntersecting) observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

///TABS
tabContainer.addEventListener("click", function (e) {
  clicked = e.target.closest(".tab");
  console.log(clicked.dataset.tab);

  tabs.forEach((tab) => tab.classList.remove("tab--active"));
  clicked.classList.add("tab--active");

  tabContent.forEach((tab) => tab.classList.remove("tab__content--active"));

  document
    .querySelector(`.tab__content--${clicked.dataset.tab}`)
    .classList.add("tab__content--active");
});


