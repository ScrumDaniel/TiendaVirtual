function actualizarCate() {
    //Obtener los datos
    const codigo = document.getElementById('cod').value;
    const nombre = document.getElementById('nom').value;
    const estado = document.getElementById('est').value;
    //Enviar los datos al backend
    let objetoEnviar = {
        codCategoria: codigo,
        nombreCategoria: nombre,
        estadoCategoria: estado,
    }
    //Api para cargar con el endpoint editar
    const apiEditarRol = "http://localhost:8094/backtienda/catego/editar";
    fetch(apiEditarRol, {
        method: "PUT",
        body: JSON.stringify(objetoEnviar),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (datos.error=="Accepted") {
                console.log(datos)
                document.getElementById("cateMsgOk").style.display = "";
                document.getElementById("cateMsgError").style.display = "none";
            } else {
                console.log("No se puede grabar -> " + datos.status);
                document.getElementById("cateMsgOk").style.display = "none";
                document.getElementById("cateMsgError").style.display = "";
            }

        })
        .catch(miError => console.log(miError));
}
