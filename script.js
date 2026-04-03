gsap.from("h1", {opacity:0, y:-50, duration:1});

function openWhatsApp() {
  const number = "6281957147033";
  const text = encodeURIComponent("Hello, saya tertarik dengan SMARA Boutique Residence");
  window.open(`https://wa.me/${number}?text=${text}`, "_blank");
}