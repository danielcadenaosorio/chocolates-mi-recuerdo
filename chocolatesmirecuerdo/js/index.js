document.addEventListener("DOMContentLoaded", () => {
  const bienvenida = document.querySelector(".bienvenida");
  bienvenida.addEventListener("mouseover", () => {
    bienvenida.style.transform = "scale(1.05)";
    bienvenida.style.transition = "transform 0.3s ease";
  });
  bienvenida.addEventListener("mouseout", () => {
    bienvenida.style.transform = "scale(1)";
  });
});
