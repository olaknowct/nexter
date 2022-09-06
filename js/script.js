const headerBtn = document.querySelector(".header__btn");

headerBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Scroll to other links
  const sectionEl = document.querySelector(".homes");
  sectionEl.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
});
