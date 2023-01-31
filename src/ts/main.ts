import anime from "animejs";

const timeline = anime.timeline({
  loop: true,
  // direction: "alternate",
});
timeline.add({
  targets: ".logo>.lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 1000,
  easing: "easeInOutQuad",
  delay: anime.stagger(50),
});
timeline.add({
  targets: ".logo .el",
  opacity: [
    { value: 0, duration: 200, easing: "easeOutExpo", direction: "alternate" },
    { value: 1, duration: 200, easing: "easeOutExpo", direction: "alternate" },
  ],
  easing: "easeOutElastic(1, 0.5)",
  delay: anime.stagger(15),
});
timeline.add({
  targets: ".logo .lines",
  fill: function (el: HTMLElement) {
    const c = el.getAttribute("stroke");
    if (c === "currentColor") return "rgb(255,255,255)";
    else return c;
  },
  strokeWidth: "1",
  duration: 1000,
  easing: "easeInOutQuad",
  delay: anime.stagger(50),
});
timeline.add({
  targets: "#logo",
  easing: "easeOutElastic(1, .8)",
  duration: 4000,
});
