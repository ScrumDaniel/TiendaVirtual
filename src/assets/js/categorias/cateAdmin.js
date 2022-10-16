function obtenerCateListarAdmin() {
    const apiObtenerCate = "http://localhost:8094/backtienda/catego/obtener";
    const miPromesaCate = fetch(apiObtenerCate).then(respuesta => respuesta.json())
        .catch(miError => console.log(miError))

    Promise.all([miPromesaCate]).then((arregloDatos) => {
        const datos = arregloDatos[0];
        crearFilaCateListarAdmin(datos);
    });
}

function crearFilaCateListarAdmin(arrObjeto) {
    const cantidadRegistros = arrObjeto.length;
    for (let i = 0; i < cantidadRegistros; i++) {
        const codigo = arrObjeto[i].codCategoria;
        const nombre = arrObjeto[i].nombreCategoria;
        const estado = arrObjeto[i].estadoCategoria;
        let estadoTxt = "Activo";
        if(estado != 1){
            estadoTxt = "<span class='check-rojo'>Inactivo</span>";
        }

        document.getElementById("tablaCateAdmin").insertRow(-1).innerHTML = "<td>" + codigo + "</td>"
            + "<td>" + nombre + "</td>"
            + "<td>" + estadoTxt + "</td>"
            + "<td class='text-center'>"
            + " <a href='javascript:confirmarBorrarCatego("+codigo+");' class='btn btn-warning'><i class='far fa-trash-alt'></i></a>"
            + "</td>"
            + "<td class='text-center'>"
            + " <a href='#cateactual/"+codigo+"' class='btn btn-success'> <i class='fas fa-sync-alt'></i></a>"
            + "</td>";
    }
}

function confirmarBorrarCatego(codigo){
    if(window.confirm("¿Seguro que quieres eliminar la categoria?")){
        window.location.replace("#catedelete/"+codigo)
    }
}