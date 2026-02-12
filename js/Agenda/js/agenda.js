document.write("Agendas");

let contactos = [];

let seguir = true;

function mostrarContactos(cotactos) {
    for (let contacto of contactos) {
                    mensaje += `Nombre: ${contacto.nombre} ${contacto.apellidos} Facultad: ${contacto.facultad} Telefono: ${contacto.telefono}Edad: ${contacto.edad}`;
                }

}

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
            console.log(contactos);

            alert("Contacto agregado correctamente");
            break;

        case 2:
            alert("Listar contactos");

            if (contactos.length === 0) {
                alert("No hay contactos guardados");
            } else {
                let mensaje = "";

                for (let contacto of contactos) {
                    mensaje += `Nombre: ${contacto.nombre} \n Apellidos: ${contacto.apellidos} \n Facultad: ${contacto.facultad} \n Telefono: ${contacto.telefono} \n Edad: ${contacto.edad}\n`;
                }
                alert(mensaje);
            }
            break;

        case 3:
            alert("Actualizar contactos");
            let contactoActualizar = prompt("Ingrese el nombre del contacto a actualizar");
            for (let contacto of contactos) {
                if (contacto.nombre === contactoActualizar) {
                    nombre = prompt("Ingrese el nuevo nombre del contacto");
                    apellidos = prompt("Ingresa los nuevos apellidos");
                    facultad = prompt("Ingresa la nueva facultad");
                    telefono = prompt("Ingresa el nuevo telefono");
                    edad = prompt("Ingresa la nueva edad");
                    contacto.nombre = nombre;
                    contacto.apellidos = apellidos;
                    contacto.facultad = facultad;
                    contacto.telefono = telefono;
                    contacto.edad = edad;
            }
        }
            break;
        case 4:
            alert("Eliminar contacto");
            let contactoEliminar = prompt ("Ingrese el nombre del contacto a eliminar");
            for (let contacto of contactos) {
                if (contacto.nombre === contactoEliminar) {
                    let index = contactos.indexOf(contacto);
                    contactos.splice(index, 1);
                alert("Contacto eliminado correctamente");
            }
        }
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