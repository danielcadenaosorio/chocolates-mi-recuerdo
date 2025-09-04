const productos = [
  { nombre: "Trufa Clásica", precio: "$5.000" },
  { nombre: "Bombón de Café", precio: "$6.000" },
  { nombre: "Chocolate con Arequipe", precio: "$7.000" }
];

const contenedor = document.getElementById("productos");

productos.forEach(p => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `<h3>${p.nombre}</h3><p>${p.precio}</p>`;
  contenedor.appendChild(div);
});
