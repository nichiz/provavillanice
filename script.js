// VILLA AUREA — funzioni leggere del sito
// Sostituisci il numero di esempio con il numero WhatsApp reale,
// includendo prefisso internazionale e senza +, spazi o trattini.
// Esempio Italia: 393401234567
const WHATSAPP_NUMBER = "393294159251";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Chiudi menu" : "Apri menu");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Apri menu");
      menuToggle.textContent = "☰";
    });
  });
}

const whatsappLink = document.querySelector("#whatsappLink");
if (whatsappLink) {
  const message = "Ciao, vorrei informazioni sulla villa e sulle disponibilità.";
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Mostra la foto solo se il file esiste e si carica correttamente.
document.querySelectorAll(".photo img").forEach((img) => {
  const figure = img.closest(".photo");
  img.addEventListener("load", () => figure?.classList.add("has-image"));
  img.addEventListener("error", () => figure?.classList.remove("has-image"));
  if (img.complete && img.naturalWidth > 0) figure?.classList.add("has-image");
});

const heroImage = new Image();
heroImage.src = "images/hero.jpg";
heroImage.onload = () => document.querySelector(".hero")?.classList.add("has-image");

const statement = document.querySelector(".statement");
const statementImage = new Image();
statementImage.src = "images/atmosfera.jpg";
statementImage.onload = () => {
  if (statement) {
    statement.style.backgroundImage = 'linear-gradient(90deg,rgba(25,31,24,.75),rgba(25,31,24,.25)), url("images/atmosfera.jpg")';
    statement.classList.add("has-image");
  }
};
