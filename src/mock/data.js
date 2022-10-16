let empleados = [];
let listaEmpleados = {};
listaEmpleados.empleados = empleados;

let codigo = 888;
let nombre = "Pato";
let apellido = "Donald";
let rol = "Administrador";
let empleado = { codigo, nombre, apellido, rol };
listaEmpleados.empleados.push(empleado);

codigo = 777;
nombre = "Augusta";
apellido = "Chonpiras";
rol = "Ladrona";
empleado = { codigo, nombre, apellido, rol };
listaEmpleados.empleados.push(empleado);

// console.log(listaEmpleados);
// console.log(JSON.stringify(listaEmpleados));