const servicios = [
  "Personalización de empaques",
  "Envíos nacionales",
  "Eventos corporativos y bodas"
];

const contenedor = document.getElementById("servicios");

servicios.forEach(s => {
  const div = document.createElement("div");
  div.className = "servicio";
  div.textContent = s;
  contenedor.appendChild(div);
});
