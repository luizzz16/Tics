document.write("Agendas");

let contactos = [];

let seguir = true;

while (seguir) {
    let opcion = prompt("Escoja una opcion: \n1.Agregar contacto \n2.Listar contactos \n3.Actualizar contactos \n4.Eliminar contacto \n5.Salir del sistema");

    opcion = parseInt(opcion);

    let nombre, apellidos, facultad, telefono, edad;

    switch (opcion) {
        case 1:
            alert("Agregar contacto");

            nombre = prompt("Ingrese el nombre del contacto");
            apellidos = prompt("Ingresa los apellidos");
            facultad = prompt("Ingresa la facultad");
            telefono = prompt("Ingresa el telefono");
            edad = prompt("Ingresa la edad");

            contactos.push({ nombre, apellidos, facultad, telefono, edad });

            alert("Contacto agregado correctamente");
            break;

        case 2:
            alert("Listar contactos");

            console.log(contactos);
            break;

        case 3:
            alert("Actualizar contactos");
            break;

        case 4:
            alert("Eliminar contacto");
            break;

        case 5:
            alert("Salir del sistema");
            seguir = false;
            break;

        default:
            alert("Opcion no valida");
            break;
    }
}