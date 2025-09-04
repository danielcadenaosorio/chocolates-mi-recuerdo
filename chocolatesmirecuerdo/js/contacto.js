document.getElementById("formContacto").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("respuesta").textContent = "¡Gracias por contactarnos! Te responderemos pronto.";
});
