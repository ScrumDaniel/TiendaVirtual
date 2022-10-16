function capturarProducto() {
  const apiListaProductos = "http://localhost:8094/backtienda/producto/obtener";
  const promesa = fetch(apiListaProductos).then((resultado) => resultado.json());

  Promise.all([promesa]).then((arregloDeDatos) => {
    const misDatos = arregloDeDatos[0];
    /*agregarFilasProductoListado(misDatos);*/
    agregarCatalogoProductos(misDatos);
  });
}

/*
function agregarFilasProductoListado(arregloExterno) {
  const cantidad = arregloExterno.length;
  for (let i = 0; i < cantidad; i++) {
    const id = arregloExterno[i].codProducto;
    const nombre = arregloExterno[i].nombreProducto;
    const precio = arregloExterno[i].precioProducto;
    const imagen = arregloExterno[i].imagenBase64Producto;

    document.getElementById("listica").insertRow(-1).innerHTML =
      "<td class='align-middle'>" + id + "</td>"
      + "<td class='text-start align-middle'>" + nombre + "</td>"
      + "<td class='align-middle'><i class='fa-thin fa-dollar-sign'></i>" + precio + "</td>"
      + "<td><img class='miniaturaAlbum' src='" + imagen + "' alt='no foto'/></td>";
  }
}*/

function agregarCatalogoProductos(arregloExterno) {
  const cantidad = arregloExterno.length;
  const divPrincipal = document.getElementById("cataProLista");

  for (let i = 0; i < cantidad; i++) {
    const id = arregloExterno[i].codProducto;
    const nombre = arregloExterno[i].nombreProducto;
    const precio = arregloExterno[i].precioProducto;
    const imagen = arregloExterno[i].imagenBase64Producto;


    divInterno = document.createElement("div");
    divInterno.innerHTML = "<div class='card shadow-sm h-100'>"
      + "<div class='card-body'>"
      + "   <p class='card-text text-center'><strong>" + nombre + "</strong></p>"
      + " <div class='d-flex justify-content-between align-items-center'>"
      + "  <div class='btn-group'>"
      + "    <button type='button' class='btn btn-sm btn-success btn-lg'>Ver detalles</button>"
      + "    <button type='button' class='btn btn-sm btn-info btn-lg'>Agregar carrito</button>"
      + "  </div>"
      + "  <small class='text-muted ms-auto'>$ " + precio + "</small>"
      + "  </div>"
      + "<div class='d-flex justify-content-center mt-5'>"
      + "<img class='fotoCatalogo' src='" + imagen + "' alt='nofoto'>"
      + "</div>"
      + " </div>"
      + "</div>";
    divPrincipal.appendChild(divInterno);

  }
}

