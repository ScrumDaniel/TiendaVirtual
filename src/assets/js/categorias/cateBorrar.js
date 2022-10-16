function eliminarCate(parametro) {
    const apiObtenerCate = "http://localhost:8094/backtienda/catego/borrar/"+parametro;
    const miPromesaCate = fetch(apiObtenerCate,{method:"DELETE"}).then(respuesta => respuesta.json())
        .catch(miError => console.log(miError))

    Promise.all([miPromesaCate]).then((arregloDatos) => {
        const datos = arregloDatos[0];
        if (datos.status=="200") {
            document.getElementById("alertCateEliminar").classList.add("alert-primary");
            document.getElementById("msgCateEliminar").innerHTML="La categoria fue eliminada con exito";           
        } else {
            document.getElementById("alertCateEliminar").classList.add("alert-danger");
            document.getElementById("msgCateEliminar").innerHTML="Categoria no eliminada";           
        }
    });
}