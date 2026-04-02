gsap.from("h1", {opacity:0, y:-50, duration:1});
gsap.from("p", {opacity:0, y:50, duration:1, delay:0.3});

function openWhatsApp() {
  const number = "6281957147033";
  const text = encodeURIComponent("Hello, I'm interested in Smara Boutique Residence Cilandak");
  window.open(`https://wa.me/${number}?text=${text}`, "_blank");
}