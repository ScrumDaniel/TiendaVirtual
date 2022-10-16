function crearProducto() {
  let base64Lista = "";
  const imagen = document.getElementById("fot");
  if (imagen.value !== "") {
      const archivo = imagen['files'][0];
      var reader = new FileReader();
      reader.onload = function () {
          base64Lista = reader.result;
          console.log("Por dentro: " + base64Lista);
          cargarProducto(base64Lista);
      }
      reader.readAsDataURL(archivo);
  }
}


function mostrarProducto(objeto) {
  if (objeto.target.files.length > 0) {
      var src = URL.createObjectURL(objeto.target.files[0]);
      var objImg = document.getElementById("fotProductoYa");
      objImg.src = src;
  }
}

function cargarProducto(base) {
  const codigoCategoria = document.getElementById("catePro").value;
  const codigoProveedor = document.getElementById("proveePro").value;
  const nom2 = document.getElementById("nom2").value;
  const nom4 = document.getElementById("nom4").value;

  let objetoEnviar = {
    nombreProducto: nom2,
    precioProducto: nom4,
    codCategoria: codigoCategoria,
    codProveedor: codigoProveedor,
    imagenBase64Producto: base,
  };
  
  const apiCrearRol = "http://localhost:8094/backtienda/producto/crear";
  fetch(apiCrearRol, {
    method: "POST",
    body: JSON.stringify(objetoEnviar),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      if (datos.hasOwnProperty("codProducto")) {
        //console.log(datos)
        document.getElementById("prodMsgOk").style.display = "";
        document.getElementById("prodMsgError").style.display = "none";
      } else {
        console.log(datos);
        console.log("No se puede grabar -> " + datos.status);
        document.getElementById("prodMsgOk").style.display = "none";
        document.getElementById("prodMsgError").style.display = "";
      }
    })
    .catch((miError) => console.log(miError));

  document.getElementById("formaProdCrear").reset();
  document.getElementById("formaProdCrear").classList.remove("was-validated");

  var objImg = document.getElementById("fotProductoYa");
  objImg.src = "src/assets/images/noFoto.png";
}
