// AOS init
AOS.init();

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// GSAP Hero Animation
gsap.from("#heroTitle", {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from("#heroText", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

// WhatsApp CTA
function openWhatsApp() {
  const number = "6281957147033";
  const message = encodeURIComponent("Hello, I'm interested in Smara Residence");
  window.open(`https://wa.me/${number}?text=${message}`, "_blank");
}