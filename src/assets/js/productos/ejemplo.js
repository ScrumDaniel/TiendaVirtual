function crearArtista() {
    let base64Lista = "";
    const imagen = document.getElementById("fot");
    if (imagen.value !== "") {
        const archivo = imagen['files'][0];
        var reader = new FileReader();
        reader.onload = function () {
            base64Lista = reader.result;
            console.log("Por dentro: " + base64Lista);
            enviarArtistaServer(base64Lista);
        }
        reader.readAsDataURL(archivo);
    }
}

function mostrarArtista(objeto) {
    if (objeto.target.files.length > 0) {
        var src = URL.createObjectURL(objeto.target.files[0]);
        var objImg = document.getElementById("fotArtYa");
        objImg.src = src;
    }
}

function enviarArtistaServer(laBase) {
    const apiCrear = "http://localhost:8094/back04/interpretes/crear";

    let objetoEnviar = {
        nombreInterprete: document.getElementById("nom").value,
        apellidoInterprete: document.getElementById("ape").value,
        paisInterprete: document.getElementById("pai").value,
        seudonimoInterprete: document.getElementById("pse").value,
        imgInterprete: laBase
    }

    fetch(apiCrear, {
        method: "POST",
        body: JSON.stringify(objetoEnviar),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            if (datos.hasOwnProperty("idInterprete")) {
                console.log(datos);
                document.getElementById("artMsgOk").style.display = "";
                document.getElementById("artMsgError").style.display = "none";
            } else {
                document.getElementById("artMsgOk").style.display = "none";
                document.getElementById("artMsgError").style.display = "";
            }
        })
        .catch(
            (miError) => { console.log(miError) }
        );

    document.getElementById("formaArt").reset();
    document.getElementById("formaArt").classList.remove("was-validated");

    var objImg = document.getElementById("fotArtYa");
    objImg.src = "src/assets/images/noFoto.png";

}
