document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const confirmacion = document.getElementById("confirmacion");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const direccion = form.direccion.value.trim();
    const cantidad = form.cantidad.value;

    if (!nombre || !direccion || cantidad <= 0) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    confirmacion.textContent = "¡Pedido enviado con éxito! 🎉";
    form.reset();
  });
});
