const search = document.querySelector(".search");
const searchItems = document.querySelectorAll(".search *");
const overlay = document.querySelector(".overlay");

search.addEventListener("click", () => {
  focusSearch();
});

document.body.addEventListener("click", (e) => {
  if (e.target === search || search.contains(e.target)) {
    return;
  } else {
    unfocusSearch();
  }
});

const focusSearch = () => {
  overlay.style.display = "block";

  gsap.to(overlay, {
    duration: 1,
    opacity: 1,
    ease: "Power4.inOut",
  });

  gsap.to(search, {
    duration: 0.8,
    scaleX: 1.1,
    scaleY: 1.1,
    ease: "Power4.inOut",
  });
};

const unfocusSearch = () => {
  gsap.to(overlay, {
    duration: 1,
    opacity: 0,
    ease: "Power4.inOut",
  });

  gsap.to(search, {
    duration: 0.8,
    scaleX: 1,
    scaleY: 1,
    ease: "Power4.inOut",
  });

  setTimeout(() => {
    overlay.style.display = "none";
  }, 1000);
};

// particles js

const loadParticles = () => {
  particlesJS.load("particles-js", "js/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
};

loadParticles();
