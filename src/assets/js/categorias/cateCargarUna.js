function obtenerCateActual(codigo) {
    const apiObtenerCate =
      "http://localhost:8094/backtienda/catego/uno/" + codigo;
  
    const miPromesaCate = fetch(apiObtenerCate)
      .then((respuesta) => respuesta.json())
      .then((dato)=>{
          if (dato.hasOwnProperty("codCategoria")) {
              document.getElementById("cod").value=dato.codCategoria;
              document.getElementById("nom").value=dato.nombreCategoria;
              document.getElementById("est").value=dato.estadoCategoria;
          } else {
              
          }
      })
      .catch((miError) => console.log(miError));
  
  }