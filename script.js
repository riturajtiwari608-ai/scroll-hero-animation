// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// 1️⃣ Headline animation on page load
gsap.to(".headline", {
    opacity: 1,
    y: -10,
    duration: 1.5,
    ease: "power3.out"
});

// 2️⃣ Stats animation (stagger effect)
gsap.to(".stat", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,
    delay: 0.5,
    ease: "power3.out"
});
// 3️⃣ Scroll-based image movement
gsap.to(".hero-image img", {
    y: -200,  // move upward on scroll
    scale: 1.2,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true  // ties animation to scroll
    }
});
gsap.from(".headline span", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out"
});