const headerBtn = document.querySelector(".header__btn");
const storyBtn = document.querySelector(".btn__story");

const callback = (e) => {
  e.preventDefault();

  // Scroll to other links
  const sectionEl = document.querySelector(".homes");
  sectionEl.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

headerBtn.addEventListener("click", callback);
storyBtn.addEventListener("click", callback);
