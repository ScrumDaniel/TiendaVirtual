function crearCate() {
    const nombre = document.getElementById('nom').value;

    let objetoEnviar = {
        nombreCategoria: nombre,
    }
    const apiCrearRol = "http://localhost:8094/backtienda/catego/crear";
    fetch(apiCrearRol, {
        method: "POST",
        body: JSON.stringify(objetoEnviar),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (datos.hasOwnProperty('codCategoria')) {
                //console.log(datos)
                document.getElementById("cateMsgOk").style.display = "";
                document.getElementById("cateMsgError").style.display = "none";
            } else {
                console.log("No se puede grabar -> " + datos.status);
                document.getElementById("cateMsgOk").style.display = "none";
                document.getElementById("cateMsgError").style.display = "";
            }

        })
        .catch(miError => console.log(miError));

    document.getElementById("formaCateCrear").reset();
    document.getElementById("formaCateCrear").classList.remove("was-validated");

}