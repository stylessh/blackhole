gsap.from(".logo", {
  duration: 1,
  delay: 0.2,
  opacity: 0,
  y: 20,
  ease: "Power4.inOut",
});

gsap.from(".navbar li", {
  duration: 0.5,
  delay: 0.4,
  opacity: 0,
  y: 20,
  ease: "Power4.inOut",
  stagger: {
    amount: 0.2,
  },
});

gsap.from(".tag h1", {
  duration: 1,
  delay: 1,
  opacity: 0,
  y: 20,
  ease: "Power4.inOut",
});

gsap.from(".search", {
  duration: 0.8,
  delay: 1.5,
  opacity: 0,
  y: 20,
  ease: "Power4.inOut",
});

gsap.from(".item", {
  duration: 0.5,
  delay: 2,
  opacity: 0,
  y: 20,
  ease: "Power4.inOut",
  stagger: {
    amount: 0.2,
  },
});

gsap.from(".btn", {
  duration: 0.5,
  delay: 2.8,
  opacity: 0,
  x: -20,
  ease: "Power4.inOut",
});
