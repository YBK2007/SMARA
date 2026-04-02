function openWhatsApp() {
    const number = "6281957147033";
    const text = encodeURIComponent("Hello, I'm interested in SMARA Residence");
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  }