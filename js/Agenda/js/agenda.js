document.write("Agendas");

let contactos = [];

let seguir = true;

let contacto = {
    id: 0,
    nombre: '',
    apellidos: '',
    facultad: '',
    telefono: '',
    edad: 0
}

function mostrarContactos(cotactos) {
    for (let contacto of contactos) {
                    mensaje += `Nombre: ${contacto.nombre} ${contacto.apellidos} Facultad: ${contacto.facultad} Telefono: ${contacto.telefono}Edad: ${contacto.edad}`;
                }

}

while (seguir) {
    let opcion = prompt("Escoja una opcion: \n1.Agregar contacto \n2.Listar contactos \n3.Actualizar contactos \n4.Eliminar contacto \n5.Salir del sistema");

    opcion = parseInt(opcion);


    switch (opcion) {
        case 1:
            alert("Agregar contacto");

            contacto.id = contactos.length + 1;
            contacto.nombre = prompt("Ingrese el nombre del contacto");
            contacto.apellidos = prompt("Ingresa los apellidos");
            contacto.facultad = prompt("Ingresa la facultad");
            contacto.telefono = prompt("Ingresa el telefono");
            contacto.edad = parseInt(prompt("Ingresa la edad"));

            contactos.push(contacto);
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
                    mensaje += `ID: ${contacto.id} \n Nombre: ${contacto.nombre} \n Apellidos: ${contacto.apellidos} \n Facultad: ${contacto.facultad} \n Telefono: ${contacto.telefono} \n Edad: ${contacto.edad}\n`;
                }
                alert(mensaje);
            }
            break;

        case 3:
            alert("Actualizar contactos");
            let contactoActualizar = prompt("Ingrase el id del usuario a actualizar");
            for (let contacto of contactos) {
                if (contacto.id === parseInt(contactoActualizar)) {
                    contacto.nombre = prompt("Ingrese el nuevo nombre del contacto");
                    contacto.apellidos = prompt("Ingresa los nuevos apellidos");
                    contacto.facultad = prompt("Ingresa la nueva facultad");
                    contacto.telefono = prompt("Ingresa el nuevo telefono");
                    contacto.edad = parseInt(prompt("Ingresa la nueva edad"));
            }
        }
            break;
        case 4:
            alert("Eliminar contacto");
            let contactoEliminar = prompt ("Ingrese el id del contacto a eliminar");
            for (let contacto of contactos) {
                if (contacto.id === parseInt(contactoEliminar)) {
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