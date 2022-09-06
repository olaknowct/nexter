const headerBtn = document.querySelector(".header__btn");
const storyBtn = document.querySelector(".btn__story");
const likeBtns = document.querySelectorAll(".home__like");

const callback = (e) => {
  e.preventDefault();

  // Scroll to other links
  const sectionEl = document.querySelector(".homes");
  sectionEl.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

const toggleLike = (e) => {
  e.path[1].classList.toggle("liked");
};

headerBtn.addEventListener("click", callback);
storyBtn.addEventListener("click", callback);

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", toggleLike);
});
