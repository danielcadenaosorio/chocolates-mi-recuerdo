const combos = [
  { nombre: "Combo Amor", incluye: "2 Trufas + 1 Bombón", precio: "$12.000" },
  { nombre: "Combo Café", incluye: "3 Bombones + 1 Café", precio: "$15.000" }
];

const contenedor = document.getElementById("combos");

combos.forEach(c => {
  const div = document.createElement("div");
  div.className = "combo";
  div.innerHTML = `<h3>${c.nombre}</h3><p>${c.incluye}</p><strong>${c.precio}</strong>`;
  contenedor.appendChild(div);
});
