function cateCombitoPro() {
    const apiListarRol = "http://localhost:8094/backtienda/catego/obtener";
    const miPrimeraPromesa = fetch(apiListarRol).then((resultado) =>
      resultado.json()
    );
    
    Promise.all([miPrimeraPromesa]).then((arregloDatos) => {
      const misDatos = arregloDatos[0];
      agregarFilasCombitoPro(misDatos);
    });
  }
  
  function agregarFilasCombitoPro(arregloExterno) {
    const cantidad = arregloExterno.length;
    const miCombito=document.getElementById("catePro");

    for (let i = 0; i < cantidad; i++) {
      const codigo = arregloExterno[i].codCategoria;
      const nombre = arregloExterno[i].nombreCategoria;
  
      const miOpcion= document.createElement("option");
      miOpcion.value=codigo;
      miOpcion.text=nombre;
      miCombito.add(miOpcion);
    }
  }
  