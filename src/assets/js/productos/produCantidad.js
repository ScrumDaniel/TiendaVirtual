function mostrarCantidadPro() {
    const apiURLCantidad = "http://localhost:8094/backtienda/producto/cantidad";
    fetch(apiURLCantidad)
        .then(respuesta => respuesta.json())
        .then(cantidad => {
            document.getElementById("cantProTotal").innerHTML = cantidad;
        })
        .catch(miError => console.log(miError));
}

function paginacionPro(paginaActual) {
    const apiURLCantidad = "http://localhost:8094/backtienda/producto/cantidad";
    fetch(apiURLCantidad)
        .then(respuesta => respuesta.json())
        .then(cantidadTotal => {
            if (paginaActual === "") { paginaActual = 0; }
            const cantidadMostrar = 6;
            const cantidadPaginas = Math.ceil(cantidadTotal / cantidadMostrar);
            const ulPaginacion = document.getElementById("paginacionProductos");
            for (let i = 0; i < cantidadPaginas; i++) {
                let indice = i + 1;
                liInterno = document.createElement("li");
                if (paginaActual == i) {
                    liInterno.innerHTML = "<li class='page-item active'>"
                        + "  <span class='page-link'>" + indice + "</span>"
                        + "</li>";
                } else {
                    liInterno.innerHTML = "<li class='page-item'>"
                        + "  <a class='page-link' href='#prodlist/" + i + "'>" + indice + "</a>"
                        + "</li>";
                }
                ulPaginacion.appendChild(liInterno);
            }
            cargarProPaginado(paginaActual, cantidadMostrar);
        })
        .catch(miError => console.log(miError));
}

function cargarProPaginado(paginaActual, cantidadMostrar) {
    const apiListaProductos = "http://localhost:8094/backtienda/producto/paginado/" + paginaActual + "/" + cantidadMostrar;
    const promesa = fetch(apiListaProductos).then((resultado) => resultado.json());
    Promise.all([promesa]).then((arregloDeDatos) => {
        console.log(arregloDeDatos[0]);
        agregarProCataPaginado(arregloDeDatos[0]);
    });
}

function agregarProCataPaginado(arregloExterno) {
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
