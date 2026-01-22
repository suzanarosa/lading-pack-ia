const buttons = document.querySelectorAll("button");
const ctaSection = document.querySelector(".cta");

// Scroll suave
buttons.forEach(button => {
  button.addEventListener("click", () => {
    ctaSection.scrollIntoView({ behavior: "smooth" });
  });
});

// CONTADOR
const timerElement = document.createElement("p");
timerElement.style.marginTop = "20px";
timerElement.style.fontWeight = "600";
ctaSection.appendChild(timerElement);

let time = 600; // 10 minutos

setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  timerElement.innerText = `⏳ Oferta expira em ${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (time > 0) {
    time--;
  }
}, 1000);
