function proveeCombitoPro() {
    const apiiListarRol = "http://localhost:8094/backtienda/provee/obtener";
    const miiPrimeraPromesa = fetch(apiiListarRol).then((resultado) =>
      resultado.json()
    );

    Promise.all([miiPrimeraPromesa]).then((arregloDatos) => {
      const miisDatos = arregloDatos[0];
      agregarFilasCombiitoPro(miisDatos);
    });
  }
  
  function agregarFilasCombiitoPro(arregloExterno) {
    const cantiidad = arregloExterno.length;
    const miiCombito=document.getElementById("proveePro");
  
    for (let i = 0; i < cantiidad; i++) {
      const codiigo = arregloExterno[i].codProveedor;
      const nombree = arregloExterno[i].nombreProveedor;
  
      const miiOpcion= document.createElement("option");
      miiOpcion.value=codiigo;
      miiOpcion.text=nombree;
      miiCombito.add(miiOpcion);
    }
  }
  