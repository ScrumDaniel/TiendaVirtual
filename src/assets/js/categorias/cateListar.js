function obtenerCateListar() {
    const apiObtenerCate = "http://localhost:8094/backtienda/catego/activas";
    const miPromesaCate = fetch(apiObtenerCate).then(respuesta => respuesta.json())
        .catch(miError => console.log(miError))

    Promise.all([miPromesaCate]).then((arregloDatos) => {
        const datos = arregloDatos[0];
        crearFilaCateListar(datos);
    });
}

function crearFilaCateListar(arrObjeto) {
    const cantidadRegistros = arrObjeto.length;
    for (let i = 0; i < cantidadRegistros; i++) {
        const codigo = arrObjeto[i].codCategoria;
        const nombre = arrObjeto[i].nombreCategoria;

        document.getElementById("tablaCateListar").insertRow(-1).innerHTML = "<td>" + codigo + "</td>"
            + "<td>" + nombre + "</td>";
    }
}